export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email is required' })
  }

  // TODO: Connect to your email service provider (Mailchimp, ConvertKit, etc.)
  // For now, we'll simulate a successful subscription
  console.log('New subscriber:', email)

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  return res.status(200).json({ 
    message: 'Successfully subscribed',
    email: email 
  })
}