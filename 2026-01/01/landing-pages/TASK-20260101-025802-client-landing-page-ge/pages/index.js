import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Brew Haven Coffee Shop - Your Daily Ritual Awaits</title>
        <meta name="description" content="Escape the chaos. Find your moment of peace with expertly crafted coffee in a space designed for connection and creativity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-coffee-50 via-white to-coffee-100">
        {/* Hero Section - Pain → Solution */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNjgsMTExLDY2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-32 sm:pt-28 sm:pb-40">
            <div className="text-center animate-fade-in">
              <div className="inline-block mb-8">
                <div className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-coffee-200/30 shadow-lg">
                  <p className="text-coffee-700 font-medium text-sm tracking-wide">Opening February 2026</p>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-coffee-900 mb-8 leading-tight animate-slide-up">
                Your Morning Deserves
                <span className="block text-coffee-600 mt-2">More Than Just Caffeine</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-coffee-700 max-w-3xl mx-auto mb-6 leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
                Rushed mornings. Drive-thru lines. Coffee that tastes like an afterthought.
              </p>
              
              <p className="text-2xl sm:text-3xl font-serif text-coffee-800 max-w-3xl mx-auto mb-16 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                What if your coffee break became the best part of your day?
              </p>

              {/* Email Capture - Primary CTA */}
              <div className="max-w-xl mx-auto animate-slide-up" style={{animationDelay: '0.3s'}}>
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-coffee-200/50 p-8 sm:p-10">
                  <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
                    Be the First to Know
                  </h2>
                  <p className="text-coffee-700 mb-6">
                    Join our community and get exclusive opening day perks, behind-the-scenes updates, and a special welcome gift.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full px-6 py-4 rounded-full border-2 border-coffee-300 focus:border-coffee-500 focus:outline-none focus:ring-4 focus:ring-coffee-200/50 transition-all text-lg"
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Joining...' : 'Reserve Your Spot'}
                    </button>
                  </form>

                  {status === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
                      <p className="text-green-800 font-medium">Welcome to the Brew Haven family! Check your inbox for your welcome gift.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                    </div>
                  )}

                  <p className="text-sm text-coffee-600 mt-4">No spam, ever. Just coffee, community, and good vibes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - What Changes */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-coffee-900 mb-6">
                More Than a Coffee Shop
              </h2>
              <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
                A space architected for your daily ritual. Where every detail serves your experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-coffee-100 hover:border-coffee-300">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
                  Your Time Back
                </h3>
                <p className="text-coffee-700 leading-relaxed">
                  No more waiting in drive-thru lines. Pre-order through our app and walk straight to pickup. Your coffee, ready when you are.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-coffee-100 hover:border-coffee-300">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
                  A Community
                </h3>
                <p className="text-coffee-700 leading-relaxed">
                  Connect with neighbors, meet collaborators, find your people. Spacious seating, quiet corners, and communal tables designed for real human interaction.
                </p>
              </div>

              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-coffee-100 hover:border-coffee-300">
                <div className="w-16 h-16 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
                  Craft You Can Taste
                </h3>
                <p className="text-coffee-700 leading-relaxed">
                  Single-origin beans roasted locally. Baristas who know the difference between good and exceptional. Every cup crafted to specification, not mass production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - The Details */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-coffee-900 mb-6">
                Designed for Your Day
              </h2>
              <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
                Every element serves your experience. This is infrastructure for your daily ritual.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div>
                <div className="bg-gradient-to-br from-coffee-500 to-coffee-700 rounded-3xl h-96 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="text-2xl font-serif">Mobile App Preview</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-6">
                  Order Ahead, Skip the Wait
                </h3>
                <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                  Your morning routine just got 10 minutes back. Place your order from bed, from the car, from wherever. Walk in, grab your cup, get on with your day.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Customization saved:</strong> Your usual order, one tap away</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Loyalty rewards:</strong> Every 8th drink on us</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Real-time tracking:</strong> Know exactly when your drink is ready</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl font-serif font-bold text-coffee-900 mb-6">
                  A Space That Works for You
                </h3>
                <p className="text-lg text-coffee-700 mb-6 leading-relaxed">
                  Whether you're here for 5 minutes or 5 hours, the space adapts. Outlets everywhere. Lightning-fast WiFi. Seating options for every mood.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Quiet work zones:</strong> For deep focus and deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Community tables:</strong> For collaboration and conversation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-coffee-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-coffee-800"><strong>Private booths:</strong> For important calls and client meetings</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-coffee-300 to-coffee-500 rounded-3xl h-96 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg className="w-24 h-24 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-2xl font-serif">Interior Space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-white/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-4">
                Built by Coffee People, for Coffee People
              </h2>
              <p className="text-xl text-coffee-700">
                We've spent years perfecting this. Now we're sharing it with you.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-coffee-200/50">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-full flex items-center justify-center text-white text-2xl font-serif font-bold">
                    BH
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-coffee-900">Sarah Chen</h4>
                  <p className="text-coffee-600">Founder & Head Roaster</p>
                </div>
              </div>
              <p className="text-lg text-coffee-800 leading-relaxed italic">
                "After 15 years in specialty coffee across three continents, I kept seeing the same problem: great coffee shops that became chaotic production lines during rush hour. Brew Haven is my answer to that. A place where quality never compromises for speed, and where the space is as intentional as the espresso."
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-600 to-coffee-800"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQyIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAgMCBMIDAgMCAwIDEwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkMikiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Your Coffee Ritual Starts Here
            </h2>
            <p className="text-xl text-coffee-100 mb-12 leading-relaxed">
              Join 1,200+ people on the waitlist. Get exclusive opening day perks, early access to our app, and a welcome gift when we open our doors.
            </p>

            <div className="max-w-md mx-auto">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-6 py-4 rounded-full border-2 border-coffee-300 focus:border-coffee-500 focus:outline-none focus:ring-4 focus:ring-coffee-200/50 transition-all text-lg"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Joining...' : 'Get Early Access'}
                  </button>
                </form>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl">
                    <p className="text-green-800 font-medium">You're in! Check your inbox for next steps.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-800 font-medium">Something went wrong. Please try again.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-coffee-900 text-coffee-200 py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Brew Haven</h3>
                <p className="text-coffee-300 leading-relaxed">
                  A coffee shop architected for your daily ritual. Opening February 2026.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
                <p className="text-coffee-300">
                  Downtown District<br />
                  Coming Soon
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Stay Connected</h4>
                <p className="text-coffee-300 mb-4">
                  Follow our journey from concept to opening day.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-coffee-800 hover:bg-coffee-700 rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-coffee-800 hover:bg-coffee-700 rounded-full flex items-center justify-center transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-coffee-800 pt-8 text-center">
              <p className="text-coffee-400 text-sm">
                &copy; 2026 Brew Haven Coffee Shop. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}