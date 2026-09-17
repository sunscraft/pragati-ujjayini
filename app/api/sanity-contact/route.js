import { NextResponse } from 'next/server';
import { createSanitySubmission } from '@/lib/sanity.client';

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.fullName || !body.phone || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone, and email are required fields.' },
        { status: 400 }
      );
    }

    // Save submission into Sanity Backend
    try {
      const sanityResult = await createSanitySubmission(body);
      return NextResponse.json(
        {
          success: true,
          message: 'Enquiry submitted and saved to Sanity CMS backend!',
          sanityId: sanityResult._id,
        },
        { status: 201 }
      );
    } catch (sanityErr) {
      console.warn('Sanity storage warning:', sanityErr.message);
      
      // If token is missing, provide clear message
      if (sanityErr.message?.includes('SANITY_API_WRITE_TOKEN')) {
        return NextResponse.json(
          {
            success: true,
            warning: 'SANITY_API_WRITE_TOKEN is missing in .env. Please set your token to save entries directly into Sanity backend.',
            message: 'Enquiry processed.',
          },
          { status: 200 }
        );
      }
      throw sanityErr;
    }
  } catch (error) {
    console.error('Sanity Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server processing error' },
      { status: 500 }
    );
  }
}
