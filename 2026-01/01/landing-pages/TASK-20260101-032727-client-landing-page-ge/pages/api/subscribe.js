import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  try {
    // If RESEND_API_KEY is not set, simulate success for testing
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 Simulated subscribe:', email)
      return res.status(200).json({ 
        success: true, 
        message: 'Subscribed (test mode)',
        email 
      })
    }

    // Send welcome email via Resend
    await resend.emails.send({
      from: 'Brew Haven <hello@brewhaven.co>',
      to: email,
      subject: 'Welcome to Brew Haven - Your Free Cortado Awaits',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #964d31; font-size: 28px; margin-bottom: 20px;">You're In!</h1>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thanks for joining the Brew Haven early access list. You're officially on the VIP roster for opening day.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            <strong>What happens next:</strong>
          </p>
          
          <ul style="color: #333; font-size: 16px; line-height: 1.8;">
            <li>We'll email you 48 hours before opening day with reservation details</li>
            <li>Show this email for your free cortado (or any drink, we're not that strict)</li>
            <li>First 50 members get a founding member card with perks</li>
          </ul>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
            See you soon,<br>
            <strong>The Brew Haven Team</strong>
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 14px;">
            <p>Brew Haven • 123 Main Street, Downtown • hello@brewhaven.co</p>
          </div>
        </div>
      `,
    })

    // Store in your database/CRM here
    // await db.subscribers.create({ email, created_at: new Date() })

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      email 
    })

  } catch (error) {
    console.error('Subscribe error:', error)
    return res.status(500).json({ 
      error: 'Failed to subscribe',
      message: error.message 
    })
  }
}