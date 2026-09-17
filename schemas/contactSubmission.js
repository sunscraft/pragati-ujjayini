export default {
  name: 'contactSubmission',
  title: 'Form Submission',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'category',
      title: 'Business Category',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'servicesNeeded',
      title: 'Services Needed',
      type: 'array',
      of: [{ type: 'string' }],
      readOnly: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'submittedAt',
      title: 'Submission Date',
      type: 'datetime',
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'businessName',
      email: 'email',
      date: 'submittedAt',
    },
    prepare(selection) {
      const { title, subtitle, email, date } = selection;
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        title: `${title || 'Anonymous'} (${subtitle || 'No business'})`,
        subtitle: `${email || ''} - ${formattedDate}`,
      };
    },
  },
};
