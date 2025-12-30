export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    // TODO: Integrate with your email service provider (Mailchimp, ConvertKit, etc.)
    // For now, we'll just log it and return success
    console.log('New subscriber:', email)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed',
      email 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return res.status(500).json({ error: 'Failed to subscribe. Please try again.' })
  }
}