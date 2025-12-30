export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, name } = req.body

  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  console.log('New subscription:', { email, name, timestamp: new Date().toISOString() })

  return res.status(200).json({
    message: 'Successfully subscribed',
    email,
    name
  })
}