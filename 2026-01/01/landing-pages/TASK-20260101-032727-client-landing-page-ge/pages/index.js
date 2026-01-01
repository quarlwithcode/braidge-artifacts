import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
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
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Brew Haven - Where Work Meets Wonder</title>
        <meta name="description" content="Premium coffee and the perfect coworking space for remote workers who refuse to settle for mediocre." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary-100/40 via-transparent to-transparent opacity-60"></div>
          
          <div className="container-custom py-20 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-primary-200/50 shadow-sm animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></div>
                <span className="text-sm font-medium text-primary-800">Now Open Downtown</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-900 leading-[1.1] animate-slide-up">
                Where Work
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">Meets Wonder</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-primary-700 max-w-2xl mx-auto leading-relaxed animate-slide-up-delay">
                Stop settling for coffee shop roulette. Get premium beans, reliable wifi, and a workspace designed for humans who actually create things.
              </p>

              {/* Email Capture Form */}
              <div className="animate-slide-up-delay-2">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="glass-card p-2 rounded-2xl shadow-xl">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-primary-900 placeholder-primary-400 disabled:opacity-50"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {isSubmitting ? 'Joining...' : 'Join the List'}
                      </button>
                    </div>
                  </div>
                  
                  {status === 'success' && (
                    <p className="mt-4 text-sm text-primary-700 bg-primary-100/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                      ✓ You're in! Check your email for your welcome gift.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="mt-4 text-sm text-red-600 bg-red-50/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                
                <p className="mt-4 text-sm text-primary-600">
                  Get first access to our opening day + a free cortado on us
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </section>

        {/* Pain Section */}
        <section className="py-20 md:py-32 bg-white/40 backdrop-blur-sm">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-900">
                Tired of the Coffee Shop Lottery?
              </h2>
              <p className="text-lg md:text-xl text-primary-700 leading-relaxed">
                You know the drill. Show up at 9am, every table taken. WiFi drops mid-Zoom. The person next to you takes a sales call at full volume. Your "office" is wherever you can grab a seat between the bathroom and the door.
              </p>
              <p className="text-lg md:text-xl text-primary-700 leading-relaxed">
                You deserve better than begging for an outlet and praying the internet holds.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-900">
                A Space Built for How You Actually Work
              </h2>
              <p className="text-lg md:text-xl text-primary-700 leading-relaxed">
                Brew Haven isn't another coffee shop tolerating laptops. We designed every inch for remote workers who take their craft seriously.
              </p>
              <p className="text-lg md:text-xl text-primary-700 leading-relaxed">
                Reserved tables. Gigabit fiber. Soundproofed phone booths. Coffee that doesn't taste like burned regret. Open 6am to midnight because inspiration doesn't punch a clock.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-100/50 to-accent-100/30">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-900 text-center mb-16">
              What Changes When You Work Here
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Your Morning Routine',
                  description: 'Reserve your spot the night before. Walk in, sit down, start creating. No laptop limbo.',
                },
                {
                  title: 'Your Focus',
                  description: 'Zoned spaces for deep work, collaboration, and calls. Everyone knows the vibe. No accidental office parties.',
                },
                {
                  title: 'Your Coffee Standards',
                  description: 'Single-origin beans roasted in-house. Baristas who know a flat white from a latte. Unlimited refills on drip.',
                },
              ].map((benefit, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h3 className="font-display text-2xl font-bold text-primary-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container-custom">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-900 text-center mb-16">
              The Details That Matter
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: '⚡', label: '1Gbps Fiber' },
                { icon: '🔌', label: 'USB-C at Every Seat' },
                { icon: '📞', label: 'Soundproof Booths' },
                { icon: '🪑', label: 'Herman Miller Chairs' },
                { icon: '☕', label: 'Unlimited Drip Coffee' },
                { icon: '🌡️', label: 'Climate Controlled' },
                { icon: '🔒', label: 'Secure Lockers' },
                { icon: '🖨️', label: 'Free Printing' },
              ].map((feature, i) => (
                <div key={i} className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-primary-200/50 text-center hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <div className="font-semibold text-primary-900">{feature.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-display text-3xl md:text-5xl font-bold">
                Stop Working From Nowhere
              </h2>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Join the list. Get early access when we open next month, plus a free cortado to start your first session right.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-primary-900 placeholder-primary-400 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {isSubmitting ? 'Joining...' : 'Get Early Access'}
                    </button>
                  </div>
                </div>
                
                {status === 'success' && (
                  <p className="mt-4 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    ✓ You're in! Check your email.
                  </p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-sm bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    Something went wrong. Try again?
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-primary-900 text-primary-200">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Brew Haven</h3>
                  <p className="text-sm">Where work meets wonder</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-8 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-1">Opening Soon</p>
                    <p>Downtown • 123 Main Street</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Questions?</p>
                    <p>hello@brewhaven.co</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary-800 text-center text-sm">
                <p>&copy; 2026 Brew Haven. Crafted for creators.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}