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
        <title>Brew Haven - Premium Coffee Meets Productive Workspace</title>
        <meta name="description" content="Your new favorite place to work. Premium coffee, lightning-fast WiFi, and a community that gets it done." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-brew-cream via-white to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brew-brown/5 to-brew-orange/5"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-32 sm:pt-28 sm:pb-40">
            <div className="text-center animate-fade-in">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brew-dark mb-6 leading-tight">
                Your Office Doesn't Have To
                <span className="block text-brew-orange mt-2">Feel Like An Office</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                Stop paying for soulless coworking spaces. Get premium coffee, lightning-fast WiFi, and a community that actually understands deep work.
              </p>

              {/* Email Capture Form */}
              <div className="max-w-md mx-auto animate-slide-up">
                <form onSubmit={handleSubmit} className="relative">
                  <div className="glass-card p-2 rounded-2xl shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="flex-1 px-6 py-4 rounded-xl border-2 border-transparent focus:border-brew-orange focus:outline-none text-gray-800 placeholder-gray-400 transition-all"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-gradient-to-r from-brew-brown to-brew-orange text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                      >
                        {loading ? 'Joining...' : 'Get Early Access'}
                      </button>
                    </div>
                  </div>
                </form>

                {status === 'success' && (
                  <p className="mt-4 text-green-600 font-medium animate-fade-in">Welcome to Brew Haven! Check your inbox.</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 text-red-600 font-medium animate-fade-in">Something went wrong. Please try again.</p>
                )}

                <p className="text-sm text-gray-500 mt-4">Join 200+ remote workers who found their flow state</p>
              </div>
            </div>
          </div>

          {/* Floating decoration */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-brew-orange/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brew-brown/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </section>

        {/* Pain Section */}
        <section className="py-20 sm:py-28 bg-white/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brew-dark mb-6">
                Tired Of Working From Home?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We built Brew Haven because we lived this pain every single day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="font-display text-xl font-semibold text-brew-dark mb-3">Terrible Coffee</h3>
                <p className="text-gray-600 leading-relaxed">That instant coffee isn't cutting it. You deserve better than whatever's in your kitchen cabinet.</p>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">😵</div>
                <h3 className="font-display text-xl font-semibold text-brew-dark mb-3">Zero Separation</h3>
                <p className="text-gray-600 leading-relaxed">Your couch is your office. Your bedroom is your meeting room. You can't remember the last time you left the house.</p>
              </div>

              <div className="glass-card p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="font-display text-xl font-semibold text-brew-dark mb-3">No Community</h3>
                <p className="text-gray-600 leading-relaxed">You're crushing it professionally but haven't had a real conversation in days. Slack doesn't count.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brew-dark mb-6 leading-tight">
                  A Third Place That Actually Works
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Brew Haven isn't another generic coffee shop. It's designed from the ground up for people who need to get real work done.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Premium single-origin coffee. Fiber internet. Comfortable seating that won't destroy your back. And enough power outlets that you'll never fight for one.
                </p>
              </div>

              <div className="glass-card p-8 rounded-3xl">
                <div className="bg-gradient-to-br from-brew-brown to-brew-orange p-8 rounded-2xl text-white">
                  <h3 className="font-display text-2xl font-bold mb-4">Opening February 2026</h3>
                  <p className="text-brew-cream mb-6">Downtown location. Walking distance from everything that matters.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>7am - 9pm, 7 days a week</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Founding member pricing available</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Members-only events & workshops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-brew-dark to-brew-brown text-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Changes When You Join
              </h2>
              <p className="text-xl text-brew-cream max-w-2xl mx-auto">
                This isn't just better coffee. It's a completely different way to work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="font-display text-2xl font-semibold mb-4">Your Morning Routine Transforms</h3>
                <p className="text-brew-cream leading-relaxed">
                  You actually look forward to Monday. Grab your laptop, walk to Brew Haven, order something that was roasted this week. You're set up and in flow state by 9am.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="font-display text-2xl font-semibold mb-4">Your Productivity Doubles</h3>
                <p className="text-brew-cream leading-relaxed">
                  No more laundry distractions. No more "I'll just check the fridge." You're here to work, surrounded by others doing the same. The energy is contagious.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="font-display text-2xl font-semibold mb-4">You Build Real Relationships</h3>
                <p className="text-brew-cream leading-relaxed">
                  You recognize the regulars. You grab lunch with the founder working on something interesting. Opportunities happen because you're in the room.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="font-display text-2xl font-semibold mb-4">Work-Life Balance Returns</h3>
                <p className="text-brew-cream leading-relaxed">
                  When you close your laptop at Brew Haven, work is done. Home becomes home again. Your partner stops asking if you ever leave the apartment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brew-dark mb-6">
                Built For Deep Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every detail designed to help you do your best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">☕</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Specialty Coffee</h3>
                <p className="text-gray-600 text-sm">Single-origin beans, expert baristas, and oat milk that doesn't taste like cardboard</p>
              </div>

              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Fiber Internet</h3>
                <p className="text-gray-600 text-sm">1Gbps symmetric. Upload your videos, join your Zooms, no buffer</p>
              </div>

              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🔌</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Power Everywhere</h3>
                <p className="text-gray-600 text-sm">Every seat has outlets. USB-C charging built into the tables</p>
              </div>

              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🪑</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Ergonomic Seating</h3>
                <p className="text-gray-600 text-sm">Herman Miller chairs, standing desks, and couches that won't wreck your posture</p>
              </div>

              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🎧</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Quiet Zones</h3>
                <p className="text-gray-600 text-sm">Dedicated silent areas for deep focus. Take calls in the phone booths</p>
              </div>

              <div className="group p-6 rounded-xl hover:bg-brew-cream/50 transition-colors duration-300">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="font-display text-lg font-semibold text-brew-dark mb-2">Actual Food</h3>
                <p className="text-gray-600 text-sm">Fresh pastries, grain bowls, and salads. Not just sad muffins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-brew-cream to-orange-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brew-dark mb-6">
              Founding Members Get Lifetime Pricing
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
              Join before we open and lock in $99/month forever. Price goes to $149 at launch.
            </p>

            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="glass-card p-2 rounded-2xl shadow-2xl">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-1 px-6 py-4 rounded-xl border-2 border-transparent focus:border-brew-orange focus:outline-none text-gray-800 placeholder-gray-400 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-4 bg-gradient-to-r from-brew-brown to-brew-orange text-white font-semibold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {loading ? 'Joining...' : 'Claim Your Spot'}
                    </button>
                  </div>
                </div>
              </form>

              {status === 'success' && (
                <p className="mt-4 text-green-600 font-medium animate-fade-in">Welcome to Brew Haven! Check your inbox.</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600 font-medium animate-fade-in">Something went wrong. Please try again.</p>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-8">Limited to first 100 members</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brew-dark text-white py-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Brew Haven</h3>
                <p className="text-brew-cream text-sm">Premium coffee meets productive workspace.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Opening Soon</h4>
                <p className="text-brew-cream text-sm">Downtown District<br />February 2026</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <p className="text-brew-cream text-sm">Join our email list for exclusive founding member benefits and opening updates.</p>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-brew-cream text-sm">
              <p>&copy; 2026 Brew Haven. Built for people who do real work.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}