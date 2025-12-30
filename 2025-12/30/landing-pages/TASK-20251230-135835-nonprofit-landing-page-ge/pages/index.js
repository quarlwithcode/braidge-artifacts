import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
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
        <title>Transform Lives Together | Join Our Movement</title>
        <meta name="description" content="Every community deserves hope. Join thousands making real change happen. Your support creates lasting impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section - Pain Point */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className={`relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Every Day, Families Are
                <span className="block mt-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Falling Through the Cracks
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 mb-12 leading-relaxed font-light">
                While you're reading this, someone in your community is choosing between medicine and meals. Between shelter and safety. Between hope and despair.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
                The systems that should protect them are broken. The resources that should reach them are stretched thin. The future that should be bright feels impossibly distant.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="backdrop-blur-xl bg-white/70 rounded-3xl sm:rounded-[3rem] shadow-2xl border border-white/20 p-10 sm:p-16 lg:p-20">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  But It Doesn't Have to Be This Way
                </h2>
                <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed">
                  When communities come together, when compassion meets action, when people like you decide enough is enough—everything changes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Direct Impact</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Your support goes straight to families who need it most. No bureaucracy, no delays—just real help reaching real people.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Results</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We've helped over 5,000 families rebuild their lives. Our model works because it's built on dignity, not charity.
                  </p>
                </div>

                <div className="text-center sm:col-span-2 lg:col-span-1">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Lasting Change</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We don't just solve today's crisis. We build pathways to self-sufficiency that break generational cycles of poverty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                What Changes When You Join
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed">
                This isn't just a donation. It's a declaration that you believe everyone deserves a fighting chance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-white/60 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">For Families in Crisis</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      They receive immediate assistance—food security, emergency housing support, medical care access. But more than that, they receive hope. The message that they matter. That someone sees them. That they're not alone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">For Your Community</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      When families stabilize, neighborhoods strengthen. Crime drops. Schools improve. Local businesses thrive. Your investment doesn't just help one person—it lifts everyone around them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/60 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">For You</h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      You become part of something bigger than yourself. You'll receive quarterly impact reports showing exactly how your support is changing lives. You'll join a community of people who refuse to look away. And you'll know, with certainty, that you made today better than yesterday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture CTA */}
        <section className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-600/90 to-purple-600/90 rounded-3xl sm:rounded-[3rem] shadow-2xl border border-white/20 p-10 sm:p-16 lg:p-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Start Making an Impact Today
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-12 leading-relaxed">
                Join thousands of people who are turning compassion into action. Get updates on our work, stories from the families you're helping, and ways to deepen your impact.
              </p>

              <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-6 py-5 rounded-2xl text-lg bg-white/95 backdrop-blur-sm text-slate-900 placeholder-slate-500 border-2 border-transparent focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 shadow-lg"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-5 rounded-2xl text-lg font-bold bg-white text-blue-600 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Movement'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 rounded-xl bg-green-500/20 backdrop-blur-sm border border-green-400/30">
                    <p className="text-white font-medium">Thank you! Check your inbox for a welcome message.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-400/30">
                    <p className="text-white font-medium">Something went wrong. Please try again.</p>
                  </div>
                )}
              </form>

              <p className="mt-8 text-sm text-white/70">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Features/Proof Section */}
        <section className="relative py-20 sm:py-28 lg:py-36 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                How We Work
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed">
                Our model is simple: meet people where they are, provide what they need, and walk alongside them until they're standing strong.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="backdrop-blur-sm bg-white/70 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/50">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 font-bold text-xl">
                    ✓
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Immediate Assistance</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Emergency food, shelter support, medical care coordination. When crisis hits, we respond within 24 hours.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  92% of families report stabilization within the first week of support.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/70 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/50">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-100 text-purple-600 font-bold text-xl">
                    ✓
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Skills & Employment</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Job training, resume building, interview prep, and direct connections to hiring partners.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  78% of participants secure stable employment within 90 days.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/70 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/50">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-100 text-cyan-600 font-bold text-xl">
                    ✓
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Stability</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Budgeting education, credit repair, savings programs, and pathways to homeownership.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  Participants build an average of $2,400 in emergency savings within 6 months.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/70 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/50">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-100 text-green-600 font-bold text-xl">
                    ✓
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ongoing Support</h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Mentorship, community connection, and access to resources long after the initial crisis passes.
                </p>
                <p className="text-base text-slate-600 leading-relaxed">
                  85% of families remain stable and connected to our community after 2 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Every community deserves hope.
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Together, we're building a world where no one falls through the cracks.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
                <a href="mailto:hello@nonprofit.org" className="hover:text-white transition-colors duration-300">
                  hello@nonprofit.org
                </a>
                <span className="hidden sm:inline">•</span>
                <span>© 2026 Nonprofit Organization</span>
                <span className="hidden sm:inline">•</span>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl lg:hidden z-50">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('form').scrollIntoView({ behavior: 'smooth' })
            }}
            className="block w-full py-4 px-6 rounded-xl text-center text-lg font-bold bg-white text-blue-600 hover:bg-slate-50 transition-all duration-300 shadow-lg"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </>
  )
}