export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' })
  }

  // TODO: Connect to your email service provider (e.g., Mailchimp, ConvertKit, etc.)
  // For now, this is a placeholder that simulates success
  console.log('New subscriber:', email)

  // Simulate API delay
  setTimeout(() => {
    res.status(200).json({ 
      message: 'Successfully subscribed!',
      email: email 
    })
  }, 500)
}