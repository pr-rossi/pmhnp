import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to Clarity Education',
      html: `
        <h1>Welcome to Clarity Education, ${name}!</h1>
        <p>Thank you for creating an account. We're excited to have you join us.</p>
        <p>You can now access our courses and resources.</p>
        <p>Best regards,<br>The Clarity Education Team</p>
      `
    })
    console.log('Email sent:', data)
    return data
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    throw error
  }
} 