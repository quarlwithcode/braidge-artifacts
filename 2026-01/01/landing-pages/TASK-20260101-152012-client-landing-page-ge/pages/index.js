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
        <title>Transform Your Learning Journey | eLearning Platform</title>
        <meta name="description" content="Break free from outdated training. Build skills that matter with interactive courses designed for real results." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              {/* Pain Point */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
                  Stuck in outdated training that doesn't deliver?
                </span>
              </div>

              {/* Hero Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Learn Skills That
                <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                  Actually Matter
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Break free from boring courses and checkbox training. Build real expertise with interactive learning that fits your schedule and drives measurable results.
              </p>

              {/* Email Capture Form */}
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="relative">
                  <div className="glass-card p-3 rounded-2xl shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                      >
                        {loading ? 'Joining...' : 'Start Learning Free'}
                      </button>
                    </div>
                  </div>
                </form>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 animate-fade-in">
                    Success! Check your email to get started.
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 animate-fade-in">
                    Something went wrong. Please try again.
                  </div>
                )}

                <p className="mt-6 text-slate-400 text-sm">
                  Join 10,000+ learners transforming their careers. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                What Changes When You Join
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                This isn't just another course library. It's a complete learning ecosystem built for your success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Learn at Your Pace</h3>
                <p className="text-slate-300 leading-relaxed">
                  No rigid schedules. No falling behind. Access courses 24/7 and learn when it works for your life, not someone else's calendar.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Skills That Stick</h3>
                <p className="text-slate-300 leading-relaxed">
                  Interactive exercises, real-world projects, and immediate feedback mean you build muscle memory, not just check boxes.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Measurable Results</h3>
                <p className="text-slate-300 leading-relaxed">
                  Track your progress, earn certifications, and prove your expertise with credentials that employers actually recognize.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 sm:py-32 bg-gradient-to-b from-transparent to-slate-950/50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Everything You Need to Succeed
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Expert-Led Courses</h4>
                  <p className="text-slate-300">Learn from practitioners who've done the work, not just taught the theory.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Interactive Exercises</h4>
                  <p className="text-slate-300">Practice with hands-on projects that mirror real workplace challenges.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Community Support</h4>
                  <p className="text-slate-300">Connect with peers, share wins, and get unstuck when you need help.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Mobile & Desktop Access</h4>
                  <p className="text-slate-300">Learn anywhere with seamless sync across all your devices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Progress Tracking</h4>
                  <p className="text-slate-300">See exactly where you are and what to tackle next with smart dashboards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 glass-card rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Certificates & Badges</h4>
                  <p className="text-slate-300">Showcase your achievements with shareable credentials for LinkedIn and resumes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Build Skills That Matter?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join thousands of learners who stopped wasting time on outdated training and started building real expertise.
            </p>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="glass-card p-3 rounded-2xl shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    >
                      {loading ? 'Joining...' : 'Get Started Free'}
                    </button>
                  </div>
                </div>
              </form>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-300 animate-fade-in">
                  Success! Check your email to get started.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 animate-fade-in">
                  Something went wrong. Please try again.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
                © 2026 Client eLearning Platform. Transform your learning journey.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}