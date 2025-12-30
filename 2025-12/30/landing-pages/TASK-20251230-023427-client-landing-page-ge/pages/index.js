import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Making Change Happen | Nonprofit</title>
        <meta name="description" content="Join us in creating lasting impact in communities that need it most. Together, we can build a better future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Making Change Happen | Nonprofit" />
        <meta property="og:description" content="Join us in creating lasting impact in communities that need it most." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Change Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
              We're building stronger communities through education, resources, and direct support. Every person deserves opportunity.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Joining...' : 'Join Our Movement'}
                </button>
              </form>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 text-green-800 rounded-lg" role="alert">
                  Welcome! Check your inbox for next steps.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 text-red-800 rounded-lg" role="alert">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-gray-600 text-lg">Lives Impacted</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 text-lg">Communities Served</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600 text-lg">Committed to Impact</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="px-6 py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              We believe everyone deserves access to the resources that unlock potential. Through education, direct support, and community building, we're creating pathways to opportunity that last.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-6 py-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              How We Create Change
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education Programs</h3>
                <p className="text-gray-700">
                  Workshops, training, and resources that build skills for the future. Knowledge is the foundation of opportunity.
                </p>
              </div>

              <div className="p-8 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support</h3>
                <p className="text-gray-700">
                  Direct assistance when it matters most. Food security, housing support, and crisis intervention.
                </p>
              </div>

              <div className="p-8 bg-blue-50 rounded-lg">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Systems Change</h3>
                <p className="text-gray-700">
                  Advocacy and infrastructure that address root causes. Long-term solutions that compound over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Be Part of the Solution
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands who are already making a difference. Get updates on our work, upcoming events, and ways to get involved.
            </p>
            <a href="#email" className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all transform hover:scale-105">
              Sign Up Above
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 bg-gray-900 text-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()} Nonprofit. Creating change that lasts.</p>
        </footer>
      </main>
    </>
  )
}