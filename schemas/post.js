export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path segment for this post. Auto-generated from title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary shown on blog listing page (max 200 chars)',
      validation: (Rule) => Rule.max(200).warning('Excerpt should be under 200 characters.'),
    },
    {
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Descriptive alt text for the cover image (essential for SEO & accessibility).',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Digital Marketing', value: 'Digital Marketing' },
          { title: 'SEO Strategy', value: 'SEO Strategy' },
          { title: 'Web Development', value: 'Web Development' },
          { title: 'Business Growth', value: 'Business Growth' },
          { title: 'Local Marketing', value: 'Local Marketing' },
          { title: 'Content Strategy', value: 'Content Strategy' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Enter tag and press ENTER...',
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      initialValue: "Grow 'n' Foster Team",
    },
    {
      name: 'authorRole',
      title: 'Author Role',
      type: 'string',
      initialValue: 'Digital Marketing Expert',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Rich text body content. Add headings, inline formatting, images, and callouts.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Link URL',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'altText',
              type: 'string',
              title: 'Alt Text',
              description: 'Important for SEO and accessibility.',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption displayed below image.',
            },
          ],
        },
        {
          name: 'callout',
          title: 'Callout Box',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Callout Text',
              type: 'text',
              rows: 3,
            },
            {
              name: 'type',
              title: 'Callout Style Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Info (Blue)', value: 'info' },
                  { title: 'Warning (Orange/Yellow)', value: 'warning' },
                  { title: 'Success (Green)', value: 'success' },
                  { title: 'Note (Gray)', value: 'note' },
                ],
              },
              initialValue: 'info',
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      title: 'Legacy Blog Content (HTML string fallback)',
      type: 'text',
      description: 'Legacy plain HTML text for older blog posts.',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides the main title for search engines (max 60 chars)',
      validation: (Rule) => Rule.max(60).warning('SEO title should ideally be under 60 characters.'),
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines (max 160 chars)',
      validation: (Rule) => Rule.max(160).warning('SEO description should ideally be under 160 characters.'),
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Custom canonical URL if syndicated or originally published elsewhere. Leave blank to default to https://grownfoster.com/blog/[slug]',
    },
    {
      name: 'schemaType',
      title: 'Blog Schema Type (Structured Data)',
      type: 'string',
      description: 'SEO Schema.org classification for search engine indexers',
      options: {
        list: [
          { title: 'BlogPosting (Recommended for Blogs)', value: 'BlogPosting' },
          { title: 'Article', value: 'Article' },
          { title: 'News Article', value: 'NewsArticle' },
          { title: 'Tech Article', value: 'TechArticle' },
        ],
      },
      initialValue: 'BlogPosting',
    },
    {
      name: 'faqSchema',
      title: 'FAQ Schema Builder',
      type: 'array',
      description: 'Add Questions & Answers to automatically generate FAQPage JSON-LD schema for Google',
      of: [
        {
          type: 'object',
          title: 'Question & Answer Pair',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'customSchemaJson',
      title: 'Custom JSON-LD Schema (Raw Code)',
      type: 'text',
      rows: 5,
      description: 'Paste custom JSON-LD schema (e.g. <script type="application/ld+json">...</script> or JSON object). Rendered directly into page head.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      slug: 'slug.current',
    },
    prepare(selection) {
      const { title, author, media, slug } = selection;
      return {
        title,
        subtitle: `by ${author || "Grow 'n' Foster Team"} | /blog/${slug || ''}`,
        media,
      };
    },
  },
};

