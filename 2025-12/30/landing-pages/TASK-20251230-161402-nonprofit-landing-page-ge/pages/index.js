import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
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

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Transform Lives Through Impact | Nonprofit</title>
        <meta name="description" content="Join thousands making a difference. Your support creates lasting change in communities that need it most." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Transform Lives Through Impact" />
        <meta property="og:description" content="Join thousands making a difference. Your support creates lasting change." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', transform: 'translate(-50%, -50%)' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div 
              className="transform transition-all duration-1000 ease-out"
              style={{
                opacity: 1,
                transform: `translateY(${Math.min(scrollY * 0.5, 100)}px)`
              }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark mb-8 leading-tight tracking-tight">
                Every child deserves
                <span className="block mt-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  a fighting chance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                Right now, families are choosing between medicine and meals. Between shelter and safety. Between hope and despair.
              </p>

              <p className="text-lg md:text-xl text-slate-700 mb-16 leading-relaxed max-w-2xl mx-auto">
                You can change that story. Today.
              </p>

              {/* Hero CTA */}
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Join 12,000+ Changemakers</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-6 py-5 text-lg rounded-2xl border-2 border-slate-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {loading ? 'Joining...' : 'Start Making Impact'}
                    </button>
                  </div>
                  {status === 'success' && (
                    <p className="mt-6 text-green-600 font-semibold text-lg">Welcome! Check your inbox for next steps.</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-6 text-red-600 font-semibold text-lg">Something went wrong. Please try again.</p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Pain Section */}
        <section 
          id="pain"
          data-animate
          className={`py-24 md:py-32 px-6 transition-all duration-1000 transform ${
            isVisible.pain ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
                The reality we face together
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                Behind every statistic is a family struggling to survive
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  stat: '1 in 6',
                  label: 'children go to bed hungry',
                  description: 'Missing meals affects their growth, learning, and future potential'
                },
                {
                  stat: '47%',
                  label: 'families skip medical care',
                  description: 'Preventable conditions become life-threatening when treatment is delayed'
                },
                {
                  stat: '$400',
                  label: 'away from homelessness',
                  description: 'One emergency expense separates stability from crisis for millions'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="backdrop-blur-xl bg-white/60 rounded-3xl p-10 border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                    {item.stat}
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{item.label}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section 
          id="solution"
          data-animate
          className={`py-24 md:py-32 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 transition-all duration-1000 transform ${
            isVisible.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
                  We built a system that
                  <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    changes everything
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  Not a handout. Not a temporary fix. A comprehensive ecosystem that moves families from crisis to stability to thriving.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Food security. Medical access. Financial literacy. Job training. Housing support. Mental health resources. Everything connected. Everything working together.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-12 border border-white/50 shadow-2xl">
                <div className="space-y-8">
                  {[
                    { icon: '🍎', text: 'Nutritious meals delivered weekly' },
                    { icon: '🏥', text: 'Healthcare navigation and coverage' },
                    { icon: '💼', text: 'Job training and placement' },
                    { icon: '🏠', text: 'Housing stability programs' },
                    { icon: '📚', text: 'Financial coaching and education' },
                    { icon: '🤝', text: 'Community support network' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <span className="text-4xl group-hover:scale-125 transform transition-transform duration-300">{item.icon}</span>
                      <span className="text-lg text-slate-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          id="benefits"
          data-animate
          className={`py-24 md:py-32 px-6 transition-all duration-1000 transform ${
            isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
                The transformation is real
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                This isn't theory. These are actual outcomes from families in the program.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  metric: '94%',
                  outcome: 'achieve food security within 6 months',
                  impact: 'Children focus on school instead of hunger'
                },
                {
                  metric: '78%',
                  outcome: 'obtain stable housing within 1 year',
                  impact: 'Families build roots and community connections'
                },
                {
                  metric: '85%',
                  outcome: 'increase household income by 40%+',
                  impact: 'Financial stability replaces paycheck-to-paycheck stress'
                },
                {
                  metric: '91%',
                  outcome: 'access healthcare they previously avoided',
                  impact: 'Preventive care stops small problems from becoming catastrophic'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 rounded-3xl p-10 border border-white/50 hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                >
                  <div className="text-6xl font-bold text-primary mb-4">{item.metric}</div>
                  <h3 className="text-2xl font-bold text-dark mb-4">{item.outcome}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features"
          data-animate
          className={`py-24 md:py-32 px-6 bg-gradient-to-br from-secondary/5 to-accent/5 transition-all duration-1000 transform ${
            isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
                How your support creates impact
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
                Every contribution powers multiple programs working in harmony
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: 'Immediate Relief',
                  description: 'Emergency food boxes, medical care vouchers, and crisis intervention that stop the bleeding right now',
                  details: ['48-hour response time', 'No paperwork barriers', 'Dignity-centered approach']
                },
                {
                  title: 'Stability Building',
                  description: 'Housing assistance, job training, and financial coaching that create a foundation for the future',
                  details: ['3-month intensive support', 'Personalized action plans', 'Ongoing mentorship']
                },
                {
                  title: 'Long-term Thriving',
                  description: 'Education programs, community building, and leadership development that transform lives permanently',
                  details: ['Career advancement pathways', 'Peer support networks', 'Alumni giving-back programs']
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="backdrop-blur-xl bg-white/80 rounded-3xl p-10 md:p-12 border border-white/50 hover:shadow-2xl transform transition-all duration-500"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">{feature.title}</h3>
                  <p className="text-xl text-slate-700 leading-relaxed mb-8">{feature.description}</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {feature.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-700 leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-dark mb-8 leading-tight">
              Your moment to make
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                history-shaping impact
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-16 max-w-2xl mx-auto">
              Join thousands who decided that watching wasn't enough. That waiting wasn't an option. That change starts with one person saying yes.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="backdrop-blur-xl bg-white/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-6">Start Your Impact Journey</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-5 text-lg rounded-2xl border-2 border-slate-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {loading ? 'Joining...' : 'Count Me In'}
                  </button>
                </div>
                {status === 'success' && (
                  <p className="mt-6 text-green-600 font-semibold text-lg">Welcome to the movement! Check your inbox.</p>
                )}
                {status === 'error' && (
                  <p className="mt-6 text-red-600 font-semibold text-lg">Something went wrong. Please try again.</p>
                )}
                <p className="mt-6 text-slate-500 text-sm">Get weekly impact stories and ways to help. Unsubscribe anytime.</p>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-dark text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Nonprofit</h3>
                <p className="text-slate-300 leading-relaxed">
                  Building pathways from crisis to stability to thriving for families who deserve a fighting chance.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Our Impact</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>12,000+ families served</li>
                  <li>94% achieve food security</li>
                  <li>85% increase income by 40%+</li>
                  <li>$8.4M in direct assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
                <ul className="space-y-3 text-slate-300">
                  <li>Join our newsletter</li>
                  <li>Volunteer opportunities</li>
                  <li>Corporate partnerships</li>
                  <li>Grant information</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
              <p>&copy; 2026 Nonprofit. Every family. Every future. Every day.</p>
            </div>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 backdrop-blur-xl bg-white/90 border-t border-slate-200 z-50">
          <button
            onClick={() => document.querySelector('input[type="email"]').focus()}
            className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300"
          >
            Join the Movement
          </button>
        </div>
      </div>
    </>
  )
}