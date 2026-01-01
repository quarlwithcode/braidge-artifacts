import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage('You\'re on the list! Check your inbox for early access details.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>TaskFlow AI - Project Management That Thinks Ahead</title>
        <meta name="description" content="AI-powered project management for startup founders and product managers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-blue opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-brand-purple opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-brand-purple/10 via-transparent to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              TaskFlow AI
            </div>
            <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm animate-fade-in">
              <span className="text-sm font-medium text-brand-purple">✨ Early Access Available</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Project Management
              <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                That Thinks Ahead
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Stop drowning in task lists and status meetings. TaskFlow AI predicts bottlenecks, automates updates, and keeps your team moving while you focus on building.
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <form onSubmit={handleSubmit} className="relative">
                <div className="glass-card p-2 rounded-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@startup.com"
                      required
                      disabled={status === 'loading'}
                      className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent placeholder-slate-500 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="px-8 py-4 bg-gradient-brand rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-purple/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                    </button>
                  </div>
                </div>
              </form>
              
              {message && (
                <div className={`mt-4 p-4 rounded-xl backdrop-blur-sm ${status === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`}>
                  {message}
                </div>
              )}
              
              <p className="text-sm text-slate-400 mt-4">Join 2,847 founders building smarter, not harder</p>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Your Team Shouldn't Need You
              <br />
              <span className="text-slate-400">To Know What's Next</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">😰</div>
                <h3 className="text-xl font-bold mb-3">Daily Status Anxiety</h3>
                <p className="text-slate-400 leading-relaxed">
                  You spend 2 hours every morning figuring out what's blocked, who's waiting on who, and what fires need putting out.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-3">Invisible Bottlenecks</h3>
                <p className="text-slate-400 leading-relaxed">
                  Deadlines slip because nobody saw the dependency chain. That "quick task" is blocking three teams and you found out too late.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Manual Everything</h3>
                <p className="text-slate-400 leading-relaxed">
                  Updating stakeholders, moving cards, chasing updates, sending reminders. Your tools make you work harder, not smarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI That Actually
                <span className="bg-gradient-brand bg-clip-text text-transparent"> Manages Projects</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                TaskFlow AI doesn't just track tasks. It predicts what's coming, automates the busywork, and tells you exactly what needs your attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-10 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Predictive Intelligence</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  See bottlenecks before they happen. TaskFlow analyzes your team's velocity, dependencies, and patterns to flag risks 3 days before they become fires.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Real-time dependency mapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Deadline risk scoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Capacity forecasting
                  </li>
                </ul>
              </div>

              <div className="glass-card p-10 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Automation</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Stop manually updating cards and chasing status. TaskFlow writes updates, sends nudges, and keeps stakeholders informed automatically.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Auto-generated status reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Smart task assignment
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Context-aware reminders
                  </li>
                </ul>
              </div>

              <div className="glass-card p-10 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Priority Clarity</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Get a personalized daily brief that tells you exactly what needs your attention and what can wait. No more decision fatigue.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    AI-ranked action items
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Impact-based sorting
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Focus mode recommendations
                  </li>
                </ul>
              </div>

              <div className="glass-card p-10 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Alignment</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Everyone sees the same picture. TaskFlow keeps your team synchronized without meetings, Slack chaos, or endless email threads.
                </p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Shared context timelines
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    Cross-team visibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-purple mr-2">→</span>
                    One-click stakeholder updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="relative z-10 container mx-auto px-6 py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              Built for Teams That Ship
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">Sarah Chen</div>
                    <div className="text-sm text-slate-400">VP Product, Compass AI</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  "We cut our sprint planning time from 4 hours to 30 minutes. TaskFlow just knows what needs to happen next."
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">Marcus Rodriguez</div>
                    <div className="text-sm text-slate-400">Founder, BuildFast</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  "First tool that actually reduced meetings instead of creating more. My team ships 40% faster now."
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold">Priya Patel</div>
                    <div className="text-sm text-slate-400">CPO, Vertex Labs</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  "The predictive alerts saved our Q4 launch. We saw the blocker 5 days before it would've derailed us."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 md:p-16 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stop Managing Tasks.
                <br />
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Start Shipping Products.
                </span>
              </h2>
              
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join the early access program. Limited to 100 teams this quarter.
              </p>

              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="relative">
                  <div className="glass-card p-2 rounded-2xl">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="founder@startup.com"
                        required
                        disabled={status === 'loading'}
                        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent placeholder-slate-500 disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-8 py-4 bg-gradient-brand rounded-xl font-semibold hover:shadow-lg hover:shadow-brand-purple/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                      </button>
                    </div>
                  </div>
                </form>
                
                {message && (
                  <div className={`mt-4 p-4 rounded-xl backdrop-blur-sm ${status === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-300' : 'bg-red-500/20 border border-red-500/30 text-red-300'}`}>
                    {message}
                  </div>
                )}
              </div>

              <div className="mt-10 flex items-center justify-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 container mx-auto px-6 py-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
              TaskFlow AI
            </div>
            
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <div className="text-sm text-slate-400">
              © 2026 TaskFlow AI. Built for builders.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}