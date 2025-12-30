import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in-section')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email address')
      setIsLoading(false)
      return
    }

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
        setStatus(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Change Lives Through Impact | Join Our Mission</title>
        <meta name="description" content="Every community deserves a chance to thrive. Join thousands making real change happen through proven, sustainable solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Change Lives Through Impact | Join Our Mission" />
        <meta property="og:description" content="Every community deserves a chance to thrive. Join thousands making real change happen." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Change Makers
              </div>
              <button
                onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
                className="hidden md:block px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Join the Movement
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section - Pain Point */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/50 to-accent-100/50 opacity-50"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent">
                Too Many Communities
              </span>
              <br />
              <span className="text-gray-800">Are Being Left Behind</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              While wealth concentrates in cities, rural communities struggle without access to education, healthcare, and opportunity. Families watch their children leave because there's nothing to stay for.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Be Part of the Solution
              </button>
              <button
                onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-5 bg-white/60 backdrop-blur-sm text-primary-700 rounded-full text-lg font-semibold hover:bg-white/80 transition-all duration-300 border border-primary-200"
              >
                See How It Works
              </button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 md:py-32 px-6 bg-white/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section" id="solution-content">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                  What If Change Was Possible?
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  We've built a proven system that brings resources, education, and opportunity directly to underserved communities. No bureaucracy. No waste. Just real impact.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-1">
                    <div className="bg-white rounded-3xl p-8 md:p-12">
                      <div className="space-y-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            1
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Direct Resource Delivery</h3>
                            <p className="text-gray-600 leading-relaxed">Your support goes straight to families who need it most, no middlemen.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            2
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Programs</h3>
                            <p className="text-gray-600 leading-relaxed">We build infrastructure that keeps working long after we leave.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            3
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Measurable Impact</h3>
                            <p className="text-gray-600 leading-relaxed">Track every dollar and see exactly how lives change.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-3xl p-12 backdrop-blur-sm">
                    <div className="text-6xl mb-6">🌍</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Real Change, Real Fast</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      In the last 12 months, we've brought clean water to 15,000 people, educated 3,200 children, and created 450 sustainable jobs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This isn't charity. It's investment in human potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="fade-in-section" id="benefits-content">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                  When You Join This Movement
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  You're not just donating. You're becoming part of something bigger.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary-100">
                    <div className="text-5xl mb-6">💡</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">See Your Impact</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Get monthly updates with photos, stories, and data showing exactly how your support creates change. You'll know the families you're helping by name.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-accent-100">
                    <div className="text-5xl mb-6">🤝</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Join a Community</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Connect with thousands of change makers who believe communities deserve better. Attend events, share ideas, multiply your impact.
                    </p>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary-100">
                    <div className="text-5xl mb-6">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Create Lasting Change</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Your involvement builds systems that work for generations. This isn't a handout—it's building the infrastructure for thriving communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features/Proof Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section" id="features-content">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Proven Results That Speak
                </h2>
                <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto opacity-90">
                  We don't just talk about impact. We measure it, report it, and improve it every single day.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
                  <h3 className="text-3xl font-bold mb-6">By the Numbers</h3>
                  <div className="space-y-6">
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-bold">87%</span>
                      <span className="text-lg opacity-90">of families report improved quality of life within 6 months</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-bold">$0.12</span>
                      <span className="text-lg opacity-90">overhead per dollar donated—we're obsessed with efficiency</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-bold">100%</span>
                      <span className="text-lg opacity-90">transparency with real-time impact dashboards</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
                  <h3 className="text-3xl font-bold mb-6">What We Deliver</h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Clean water systems installed in 45 villages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>12 schools built with trained teachers and supplies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Small business training for 680 entrepreneurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Healthcare clinics serving 22,000 people annually</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl border border-primary-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                  Start Making a Difference Today
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Join our community and get monthly impact updates, exclusive stories, and invitations to see the work firsthand.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-5 rounded-full border-2 border-primary-200 focus:border-primary-500 focus:outline-none text-lg bg-white/80 backdrop-blur-sm transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isLoading ? 'Joining...' : 'Join the Movement'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-2xl text-center">
                    <p className="text-green-800 font-semibold text-lg">🎉 Welcome to the movement! Check your email for next steps.</p>
                  </div>
                )}

                {status && status !== 'success' && (
                  <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center">
                    <p className="text-red-800 font-semibold">{status}</p>
                  </div>
                )}

                <p className="text-center text-gray-500 mt-6 text-sm">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Change Makers
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Building infrastructure that turns compassion into lasting community transformation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Our Work</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Clean Water Projects</li>
                  <li>Education Programs</li>
                  <li>Healthcare Access</li>
                  <li>Economic Development</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Monthly Giving</li>
                  <li>Volunteer Opportunities</li>
                  <li>Corporate Partnerships</li>
                  <li>Impact Reports</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              <p>&copy; 2026 Change Makers. Every community deserves a chance to thrive.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-primary-200 z-40">
          <button
            onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full text-lg font-semibold shadow-xl"
          >
            Join the Movement
          </button>
        </div>
      </div>
    </>
  )
}