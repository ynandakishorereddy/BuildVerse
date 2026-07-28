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
      from: 'BuildVerse Solutions <onboarding@resend.dev>', // Use verified domain here in production
      to: [contactInfo],
      subject: 'Welcome to BuildVerse Solutions - Your Free Quote',
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <h2>Thanks for reaching out to BuildVerse Solutions!</h2>
          <p>We received your request for a free quote. We're excited to learn more about your business and how we can help you grow.</p>
          
          <p>As a reminder, here is what we can do for you:</p>
          <ul>
            <li><strong>Website Development:</strong> Fast, mobile-friendly sites that turn visitors into calls.</li>
            <li><strong>Google Maps Setup:</strong> Get found when locals search "near me."</li>
            <li><strong>Meta Ads Management:</strong> Targeted ads that bring in real enquiries.</li>
          </ul>

          <p><strong>What happens next?</strong></p>
          <p>Please reply to this email with a brief description of your business and which service you are most interested in. We will get back to you with a transparent, no-pressure quote.</p>
          
          <br/>
          <p>Best regards,</p>
          <p><strong>The BuildVerse Solutions Team</strong></p>
          <p><a href="tel:+918374424565">+91 83744 24565</a></p>
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
