export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' })
  }

  // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
  // For now, just log it
  console.log('New subscriber:', email)

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Return success
  return res.status(200).json({ 
    success: true,
    message: 'Successfully subscribed'
  })
}