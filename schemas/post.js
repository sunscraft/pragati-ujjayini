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
      title: 'URL Slug',
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
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Pragati Ujjayini Team',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'mainImage',
      title: 'Main Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Blog Content (HTML / Rich Text)',
      type: 'text',
      description: 'Rich text or HTML content for the blog post.',
    },
    {
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Custom title for Google search results (defaults to Post Title if empty).',
    },
    {
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Short snippet describing the post for SEO & search engines.',
    },
    {
      name: 'canonicalUrl',
      title: 'Custom Canonical URL',
      type: 'url',
      description: 'Optional custom canonical tag. Leave empty to automatically use current post URL.',
    },
    {
      name: 'schemaType',
      title: 'Dynamic Structured Data Schema Type',
      type: 'string',
      options: {
        list: [
          { title: 'Blog Posting (Default)', value: 'BlogPosting' },
          { title: 'Article', value: 'Article' },
          { title: 'News Article', value: 'NewsArticle' },
          { title: 'Tech Article', value: 'TechArticle' },
        ],
        layout: 'radio',
      },
      initialValue: 'BlogPosting',
    },
    {
      name: 'customSchemaJson',
      title: 'Custom JSON-LD Schema Override',
      type: 'text',
      rows: 5,
      description: 'Optional raw JSON-LD structured data script. If provided, overrides standard schema.',
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
        subtitle: `by ${author || 'Admin'} | /blog/${slug || ''}`,
        media,
      };
    },
  },
};
