export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email required' })
  }

  // TODO: Connect to your email provider (ConvertKit, Mailchimp, etc.)
  // For now, just log and return success
  console.log('New subscriber:', email)

  // Example ConvertKit integration:
  // const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
  // const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID
  //
  // try {
  //   const response = await fetch(
  //     `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
  //     {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         api_key: CONVERTKIT_API_KEY,
  //         email: email,
  //       }),
  //     }
  //   )
  //
  //   if (!response.ok) {
  //     throw new Error('ConvertKit API error')
  //   }
  //
  //   return res.status(200).json({ message: 'Subscribed successfully' })
  // } catch (error) {
  //   console.error('Subscription error:', error)
  //   return res.status(500).json({ message: 'Subscription failed' })
  // }

  return res.status(200).json({ message: 'Subscribed successfully' })
}