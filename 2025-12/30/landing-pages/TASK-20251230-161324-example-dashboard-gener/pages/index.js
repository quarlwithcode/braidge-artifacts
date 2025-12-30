import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4']

const monthlyData = [
  { month: 'Jan', donations: 12400, expenses: 9800, volunteers: 24, programs: 3 },
  { month: 'Feb', donations: 15600, expenses: 11200, volunteers: 28, programs: 4 },
  { month: 'Mar', donations: 18200, expenses: 12400, volunteers: 32, programs: 4 },
  { month: 'Apr', donations: 16800, expenses: 13100, volunteers: 35, programs: 5 },
  { month: 'May', donations: 19400, expenses: 14200, volunteers: 38, programs: 5 },
  { month: 'Jun', donations: 21200, expenses: 15800, volunteers: 42, programs: 6 },
]

const donorBreakdown = [
  { name: 'Individual', value: 45, amount: 94500 },
  { name: 'Corporate', value: 30, amount: 63000 },
  { name: 'Grants', value: 20, amount: 42000 },
  { name: 'Events', value: 5, amount: 10500 },
]

const programImpact = [
  { program: 'Food Security', served: 1240, budget: 48000 },
  { program: 'Education', served: 860, budget: 36000 },
  { program: 'Housing Support', served: 420, budget: 52000 },
  { program: 'Healthcare Access', served: 680, budget: 28000 },
  { program: 'Job Training', served: 320, budget: 24000 },
]

const KPICard = ({ title, value, trend, trendValue, icon }) => {
  const isPositive = trend === 'up'
  return (
    <div className="bg-dark-800/40 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-8 hover:bg-dark-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-3">{title}</p>
          <h3 className="text-4xl font-bold text-white mb-4">{value}</h3>
        </div>
        <div className="text-3xl opacity-40">{icon}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`flex items-center gap-1 text-sm font-semibold ${
          isPositive ? 'text-success' : 'text-danger'
        }`}>
          {isPositive ? '↑' : '↓'} {trendValue}
        </span>
        <span className="text-gray-500 text-sm">vs last month</span>
      </div>
    </div>
  )
}

const ChartCard = ({ title, children, fullWidth = false }) => (
  <div className={`bg-dark-800/40 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-8 hover:bg-dark-800/60 transition-all duration-300 ${
    fullWidth ? 'col-span-1 lg:col-span-2' : ''
  }`}>
    <h3 className="text-xl font-bold text-white mb-8">{title}</h3>
    {children}
  </div>
)

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-700/95 backdrop-blur-md border border-dark-600 rounded-xl p-4 shadow-xl">
        <p className="text-gray-300 font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' && entry.value > 1000 ? `$${entry.value.toLocaleString()}` : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Dashboard() {
  const totalDonations = monthlyData.reduce((sum, d) => sum + d.donations, 0)
  const totalExpenses = monthlyData.reduce((sum, d) => sum + d.expenses, 0)
  const currentVolunteers = monthlyData[monthlyData.length - 1].volunteers
  const totalServed = programImpact.reduce((sum, p) => sum + p.served, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Header */}
      <header className="border-b border-dark-600/50 backdrop-blur-lg bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Impact Dashboard</h1>
              <p className="text-gray-400">Example Nonprofit • 2024 Performance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-xl">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Total Impact</p>
                <p className="text-xl font-bold text-primary">${totalDonations.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <KPICard 
            title="Total Donations" 
            value={`$${totalDonations.toLocaleString()}`}
            trend="up"
            trendValue="12.3%"
            icon="💰"
          />
          <KPICard 
            title="Active Volunteers" 
            value={currentVolunteers}
            trend="up"
            trendValue="10.5%"
            icon="🤝"
          />
          <KPICard 
            title="People Served" 
            value={totalServed.toLocaleString()}
            trend="up"
            trendValue="8.7%"
            icon="❤️"
          />
          <KPICard 
            title="Operating Margin" 
            value={`${(((totalDonations - totalExpenses) / totalDonations) * 100).toFixed(1)}%`}
            trend="up"
            trendValue="3.2%"
            icon="📊"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue vs Expenses */}
          <ChartCard title="Revenue vs Expenses" fullWidth>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey="donations" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorDonations)" />
                <Area type="monotone" dataKey="expenses" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Donor Breakdown */}
          <ChartCard title="Donor Source Breakdown">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={donorBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {donorBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Program Impact */}
          <ChartCard title="Program Impact by People Served" fullWidth>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={programImpact}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
                <XAxis dataKey="program" stroke="#6b7280" angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="served" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Volunteer Growth */}
          <ChartCard title="Volunteer & Program Growth">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3e" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="volunteers" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
                <Line type="monotone" dataKey="programs" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-dark-800/40 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Avg Cost per Person Served</p>
            <p className="text-3xl font-bold text-white">${Math.round(totalExpenses / totalServed)}</p>
          </div>
          <div className="bg-dark-800/40 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Volunteer Hours (Est.)</p>
            <p className="text-3xl font-bold text-white">{(currentVolunteers * 12).toLocaleString()}</p>
          </div>
          <div className="bg-dark-800/40 backdrop-blur-sm border border-dark-600/50 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Active Programs</p>
            <p className="text-3xl font-bold text-white">{programImpact.length}</p>
          </div>
        </div>
      </main>
    </div>
  )
}