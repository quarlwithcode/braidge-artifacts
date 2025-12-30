import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        setName('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Transform Lives Through Impact - Client Nonprofit</title>
        <meta name="description" content="Join a movement creating real change. Discover how we're building a better future for communities that need it most." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Hero Section - Pain Point */}
        <section className="relative overflow-hidden px-6 py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10"></div>
          
          {/* Floating decoration */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

          <div className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              Every Day, Thousands Wake Up
              <span className="block mt-4 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                Without Hope
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Families struggling to put food on the table. Children without access to education. Communities forgotten by systems that were supposed to help them.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-slate-800 mb-16 leading-relaxed">
              You know this pain exists. We're here to end it.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#join" className="group px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Join the Movement
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#impact" className="px-10 py-5 bg-white/80 backdrop-blur-sm text-slate-800 text-lg font-semibold rounded-2xl border-2 border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                See Our Impact
              </a>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                What If There Was a Better Way?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We're not just another charity. We're a movement of people who refuse to accept that suffering is inevitable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Direct Impact</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Every dollar goes directly to the people who need it. No middlemen. No bureaucracy. Just real change in real lives.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Community-Led</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We don't impose solutions. We empower communities to identify their needs and build their own futures.
                  </p>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-primary-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Listen</h4>
                      <p className="text-slate-600 leading-relaxed">We start by understanding what communities actually need, not what we think they need.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-primary-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Empower</h4>
                      <p className="text-slate-600 leading-relaxed">We provide resources, training, and support to help communities lead their own transformation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                      <span className="text-primary-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">Sustain</h4>
                      <p className="text-slate-600 leading-relaxed">We build systems that last, creating generational change that doesn't depend on us.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="impact" className="px-6 py-24 md:py-32 bg-white/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Real People. Real Change.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                This isn't about statistics. It's about families who now have roofs over their heads. Kids who can dream again. Communities that are thriving.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">15,000+</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Lives Transformed</h3>
                <p className="text-slate-600 leading-relaxed">Families with access to clean water, education, and economic opportunity.</p>
              </div>

              <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">50+</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Communities Empowered</h3>
                <p className="text-slate-600 leading-relaxed">Entire villages now self-sustaining with their own infrastructure and leadership.</p>
              </div>

              <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent mb-4">100%</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Transparency</h3>
                <p className="text-slate-600 leading-relaxed">Every project documented. Every dollar tracked. You see exactly where your impact goes.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-10 md:p-16">
              <blockquote className="text-center">
                <p className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-relaxed italic">
                  "Before, we had nothing. Now, our children go to school. We have clean water. We have hope. This organization didn't just give us help—they gave us our future back."
                </p>
                <footer className="text-lg text-slate-600">
                  <strong className="text-slate-900">Maria Santos</strong>, Community Leader
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                How Your Support Creates Change
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                When you join our movement, you're not just donating. You're investing in sustainable transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Clean Water Access</h3>
                <p className="text-slate-600 leading-relaxed">We build wells and purification systems that serve entire communities for decades.</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Education Programs</h3>
                <p className="text-slate-600 leading-relaxed">Schools, supplies, and teacher training that give children a real chance at a better life.</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Economic Opportunity</h3>
                <p className="text-slate-600 leading-relaxed">Microloans, training, and market access so families can build sustainable income.</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Healthcare Initiatives</h3>
                <p className="text-slate-600 leading-relaxed">Mobile clinics, vaccination programs, and health education that save lives.</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Housing & Infrastructure</h3>
                <p className="text-slate-600 leading-relaxed">Safe homes and community facilities that provide dignity and security.</p>
              </div>

              <div className="group bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Impact Tracking</h3>
                <p className="text-slate-600 leading-relaxed">Regular updates with photos, metrics, and stories so you see your impact unfold.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="join" className="px-6 py-24 md:py-32 bg-gradient-to-br from-primary-600 to-accent-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjctNS4zNzMtMTItMTItMTJTMTIgNy4zNzMgMTIgMTRzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Be Part of Something Bigger
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join thousands who are creating real change. Get updates on our impact, stories from the field, and ways you can help.
            </p>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-left text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-slate-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
                >
                  {isSubmitting ? 'Joining...' : 'Join the Movement'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 font-medium animate-fade-in">
                    Welcome to the movement! Check your email for next steps.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 font-medium animate-fade-in">
                    Something went wrong. Please try again.
                  </div>
                )}

                <p className="text-sm text-slate-500 leading-relaxed">
                  We respect your privacy. Unsubscribe anytime. No spam, just impact stories and ways to help.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Client Nonprofit
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Creating sustainable change in communities that need it most. One life at a time. One village at a time.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Our Work</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Clean Water Projects</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Education Initiatives</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Economic Development</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Healthcare Access</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#join" className="hover:text-white transition-colors">Join Our Newsletter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Volunteer</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>&copy; 2026 Client Nonprofit. Creating change that lasts.</p>
            </div>
          </div>
        </footer>

        {/* Sticky CTA on Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-primary-600 to-accent-600 shadow-2xl md:hidden z-50">
          <a
            href="#join"
            className="block w-full py-4 bg-white text-primary-700 text-center font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </>
  )
}