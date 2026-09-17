import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

// Helper to check if Sanity is properly configured with a valid project ID
export function isSanityConfigured() {
  return Boolean(
    projectId &&
    typeof projectId === 'string' &&
    /^[a-z0-9-]+$/i.test(projectId) &&
    projectId !== 'dummy_project_id' &&
    projectId !== 'your_project_id'
  );
}

// Safely get a Sanity read client instance
export function getSanityClient() {
  if (!isSanityConfigured()) {
    return null;
  }
  try {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
  } catch (err) {
    console.warn("Sanity client initialization warning:", err.message);
    return null;
  }
}

// Safe fallback proxy for sanityClient to prevent top-level module crash
export const sanityClient = new Proxy({}, {
  get(target, prop) {
    const client = getSanityClient();
    if (!client) {
      if (prop === 'fetch') {
        return async () => [];
      }
      return undefined;
    }
    const val = client[prop];
    return typeof val === 'function' ? val.bind(client) : val;
  }
});

// Helper for generating image URLs from Sanity image assets
export function urlFor(source) {
  if (!source) return null;
  const client = getSanityClient();
  if (!client) return null;
  try {
    const builder = imageUrlBuilder(client);
    return builder.image(source);
  } catch {
    return null;
  }
}

// Write client (requires SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN in .env)
export function getSanityWriteClient() {
  if (!isSanityConfigured()) {
    throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not configured in .env file.");
  }
  const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;
  if (!token) {
    throw new Error("SANITY_API_WRITE_TOKEN is missing in environment variables.");
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });
}

/**
 * Fetch all blogs from Sanity
 */
export async function getSanityBlogs() {
  const client = getSanityClient();
  if (!client) {
    return [];
  }
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      author,
      publishedAt,
      _createdAt,
      mainImage,
      "imageUrl": mainImage.asset->url,
      content,
      seoTitle,
      seoDescription,
      canonicalUrl,
      schemaType,
      customSchemaJson
    }`;
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    return [];
  }
}

/**
 * Fetch a single blog by slug or ID from Sanity
 */
export async function getSanityBlogBySlug(slugOrId) {
  const client = getSanityClient();
  if (!client || !slugOrId) {
    return null;
  }
  try {
    const query = `*[_type == "post" && (slug.current == $slugOrId || _id == $slugOrId)][0] {
      _id,
      title,
      "slug": slug.current,
      author,
      publishedAt,
      _createdAt,
      mainImage,
      "imageUrl": mainImage.asset->url,
      content,
      seoTitle,
      seoDescription,
      canonicalUrl,
      schemaType,
      customSchemaJson
    }`;
    return await client.fetch(query, { slugOrId });
  } catch (error) {
    console.error("Error fetching blog from Sanity:", error);
    return null;
  }
}

/**
 * Create a new contact submission in Sanity
 */
export async function createSanitySubmission(data) {
  const writeClient = getSanityWriteClient();
  const doc = {
    _type: 'contactSubmission',
    fullName: data.fullName,
    businessName: data.businessName,
    category: data.category,
    city: data.city,
    phone: data.phone,
    email: data.email,
    servicesNeeded: data.servicesNeeded || [],
    message: data.message || '',
    submittedAt: new Date().toISOString(),
  };

  return await writeClient.create(doc);
}
