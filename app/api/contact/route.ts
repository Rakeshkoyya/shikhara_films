import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = "Shikhara Films <noreply@shikharafilms.in>";
const ADMIN_EMAIL = "ramanandasagar.k@gmail.com"; // Update this to your actual admin email
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shikharafilms.in"; // Your production URL

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if Google Script URL is configured
    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not configured");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || "",
        service: body.service || "",
        message: body.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to save to Google Sheets");
    }

    // Send confirmation email to the user
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: body.email,
        subject: "Thank You for Contacting Shikhara Films!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #333;">
                    <!-- Header -->
                    <tr>
                      <td style="padding: 40px 40px 30px; text-align: center; border-bottom: 1px solid #333;">
                        <img src="${SITE_URL}/logo_white.png" alt="Shikhara Films" style="max-width: 180px; height: auto; margin-bottom: 10px;" />
                        <p style="margin: 8px 0 0; font-size: 12px; color: #888; letter-spacing: 3px; text-transform: uppercase;">Premium Video Production</p>
                      </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                      <td style="padding: 40px;">
                        <h2 style="margin: 0 0 20px; font-size: 24px; color: #ffffff; font-weight: 600;">Thank You, ${body.name}!</h2>
                        <p style="margin: 0 0 25px; font-size: 16px; line-height: 1.7; color: #cccccc;">
                          We've received your message and appreciate you reaching out to us. Our team is reviewing your inquiry and will get back to you within <strong style="color: #C9A86C;">24-48 hours</strong>.
                        </p>
                        
                        <!-- Message Summary Box -->
                        <div style="background-color: #252525; border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 4px solid #C9A86C;">
                          <h3 style="margin: 0 0 15px; font-size: 14px; color: #C9A86C; text-transform: uppercase; letter-spacing: 1px;">Your Message Summary</h3>
                          ${body.service ? `<p style="margin: 0 0 10px; font-size: 14px; color: #aaa;"><strong style="color: #fff;">Service:</strong> ${body.service}</p>` : ''}
                          ${body.phone ? `<p style="margin: 0 0 10px; font-size: 14px; color: #aaa;"><strong style="color: #fff;">Phone:</strong> ${body.phone}</p>` : ''}
                          <p style="margin: 0; font-size: 14px; color: #aaa;"><strong style="color: #fff;">Message:</strong><br><span style="display: block; margin-top: 8px; padding: 12px; background-color: #1a1a1a; border-radius: 8px; font-style: italic;">"${body.message}"</span></p>
                        </div>
                        
                        <p style="margin: 25px 0 0; font-size: 15px; line-height: 1.7; color: #999;">
                          In the meantime, feel free to explore our portfolio and see the quality of work we deliver.
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px 40px; background-color: #151515; border-top: 1px solid #333;">
                        <img src="${SITE_URL}/logo_white.png" alt="Shikhara Films" style="max-width: 120px; height: auto; margin-bottom: 12px;" />
                        <p style="margin: 0 0 15px; font-size: 13px; color: #666; line-height: 1.6;">
                          Creating cinematic stories that elevate your brand.
                        </p>
                        <p style="margin: 0; font-size: 12px; color: #555;">
                          © ${new Date().getFullYear()} Shikhara Films. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });

      // Optional: Send notification to admin
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${body.name}`,
        html: `
          <!DOCTYPE html>
          <html>
          <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
              <h2 style="color: #333; border-bottom: 2px solid #C9A86C; padding-bottom: 10px;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ''}
              ${body.service ? `<p><strong>Service:</strong> ${body.service}</p>` : ''}
              <p><strong>Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #C9A86C;">
                ${body.message}
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">
                Submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          </body>
          </html>
        `,
      });
    } catch (emailError) {
      // Log email error but don't fail the request since data was saved to Google Sheets
      console.error("Failed to send confirmation email:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
