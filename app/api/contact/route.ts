import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { contactInfo } = await request.json();

    if (!contactInfo) {
      return NextResponse.json(
        { error: 'Contact info is required' },
        { status: 400 }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: 'BuildVerse Solutions <onboarding@resend.dev>', // Resend requires this until you verify a custom domain
      reply_to: 'buildversesolutins@gmail.com', // When users hit reply, it goes here
      to: [contactInfo],
      subject: 'Welcome to BuildVerse Solutions - Your Free Quote',
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0F172A;">Thanks for reaching out to BuildVerse Solutions!</h2>
          <p>We received your request for a free quote. We're excited to learn more about your business and how we can help you grow.</p>
          
          <h3 style="color: #0F172A;">Our Services</h3>
          <p>We provide a complete growth system for local businesses:</p>
          <ul>
            <li><strong>Website Development:</strong> Fast, mobile-friendly sites designed to turn visitors into paying customers.</li>
            <li><strong>Google Maps Setup:</strong> We optimize your profile so you get found when locals search "near me".</li>
            <li><strong>Meta Ads Management:</strong> Highly targeted advertising campaigns that bring in real enquiries, not just clicks.</li>
          </ul>

          <h3 style="color: #0F172A;">Get Your Custom Pricing</h3>
          <p>Since every business is unique, we want to give you an accurate quote based on your specific needs.</p>
          <p><strong>To get your pricing, please contact us directly:</strong></p>
          <ul>
            <li><strong>Phone / WhatsApp:</strong> <a href="tel:+918374424565" style="color: #3B5FE0; text-decoration: none; font-weight: bold;">+91 83744 24565</a></li>
            <li><strong>Email:</strong> <a href="mailto:buildversesolutins@gmail.com" style="color: #3B5FE0; text-decoration: none; font-weight: bold;">buildversesolutins@gmail.com</a></li>
          </ul>
          <p>Or simply reply directly to this email!</p>
          
          <br/>
          <p>Best regards,</p>
          <p><strong>The BuildVerse Solutions Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
