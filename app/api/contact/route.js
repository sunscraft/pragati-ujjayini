// app/api/contact/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

import '@/models/Contact';

export async function POST(request) {
  try {
    const body = await request.json();

    // 1. Save to MongoDB Database (Existing Code)
    await connectDB();
    let ContactModel = mongoose.models.Contact;

    if (!ContactModel) {
      const ContactSchema = new mongoose.Schema({
        fullName: { type: String, required: true },
        businessName: { type: String, required: true },
        category: { type: String, required: true },
        city: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String },
        servicesNeeded: { type: [String], default: [] },
        createdAt: { type: Date, default: Date.now },
      });
      ContactModel = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
    }

    const newContact = new ContactModel({
      fullName: body.fullName,
      businessName: body.businessName,
      category: body.category,
      city: body.city,
      phone: body.phone,
      email: body.email,
      message: body.message,
      servicesNeeded: body.servicesNeeded,
    });

    await newContact.save();

    // 2. NEW: Send Email Notification
    // Configure Nodemailer to look at your secret variables
    // 2. Send Email Notification
    // Configure Nodemailer with strict secure settings for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Structure the layout of the notification email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the notification to yourself
      subject: `New Lead From Website: ${body.fullName}`,
      html: `
        <h3>New Enquiry Details</h3>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Business Name:</strong> ${body.businessName}</p>
        <p><strong>Category:</strong> ${body.category}</p>
        <p><strong>City:</strong> ${body.city}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Services Needed:</strong> ${body.servicesNeeded?.join(', ') || 'None selected'}</p>
        <p><strong>Message:</strong> ${body.message || 'No message provided'}</p>
      `,
    };

    // Dispatch the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Enquiry saved and email sent!' }, { status: 201 });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 500 });
  }
}