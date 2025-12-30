import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const mockMonthlyDonations = [
  { month: 'Jan', amount: 12400, donors: 34 },
  { month: 'Feb', amount: 15800, donors: 42 },
  { month: 'Mar', amount: 18200, donors: 48 },
  { month: 'Apr', amount: 16900, donors: 45 },
  { month: 'May', amount: 21300, donors: 56 },
  { month: 'Jun', amount: 19700, donors: 51 },
  { month: 'Jul', amount: 22800, donors: 61 },
  { month: 'Aug', amount: 20500, donors: 54 },
  { month: 'Sep', amount: 24100, donors: 63 },
  { month: 'Oct', amount: 26400, donors: 68 },
  { month: 'Nov', amount: 28900, donors: 74 },
  { month: 'Dec', amount: 31200, donors: 82 },
]

const mockVolunteerHours = [
  { month: 'Jan', hours: 180 },
  { month: 'Feb', hours: 210 },
  { month: 'Mar', hours: 240 },
  { month: 'Apr', hours: 195 },
  { month: 'May', hours: 275 },
  { month: 'Jun', hours: 310 },
  { month: 'Jul', hours: 290 },
  { month: 'Aug', hours: 265 },
  { month: 'Sep', hours: 285 },
  { month: 'Oct', hours: 320 },
  { month: 'Nov', hours: 340 },
  { month: 'Dec', hours: 380 },
]

const mockBudgetAllocation = [
  { category: 'Programs', amount: 145000, percentage: 58 },
  { category: 'Operations', amount: 50000, percentage: 20 },
  { category: 'Fundraising', amount: 30000, percentage: 12 },
  { category: 'Marketing', amount: 25000, percentage: 10 },
]

const mockProgramReach = [
  { quarter: 'Q1', beneficiaries: 340 },
  { quarter: 'Q2', beneficiaries: 425 },
  { quarter: 'Q3', beneficiaries: 480 },
  { quarter: 'Q4', beneficiaries: 510 },
]

const CHART_COLORS = ['#6366f1', '#22d3ee', '#a855f7', '#ec4899']

function KPICard({ title, value, trend, trendValue, icon }) {
  const isPositive = trend === 'up'
  
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-slate-600/50">
      <div className="flex items-start justify-between mb-6">
        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</div>
        <div className="text-3xl">{icon}</div>
      </div>
      <div className="text-4xl font-bold text-white mb-4">{value}</div>
      <div className="flex items-center gap-2">
        <span className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isPositive ? '↑' : '↓'} {trendValue}
        </span>
        <span className="text-slate-500 text-sm">vs last period</span>
      </div>
    </div>
  )
}

function ChartCard({ title, children }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-8">{title}</h3>
      {children}
    </div>
  )
}

export default function Dashboard() {
  const totalDonations = mockMonthlyDonations.reduce((sum, month) => sum + month.amount, 0)
  const totalVolunteerHours = mockVolunteerHours.reduce((sum, month) => sum + month.hours, 0)
  const totalBeneficiaries = mockProgramReach[mockProgramReach.length - 1].beneficiaries
  const activeVolunteers = 42

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Impact Dashboard</h1>
          <p className="text-slate-400 text-lg">Track your nonprofit's reach and effectiveness</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <KPICard
            title="Total Donations"
            value={`$${totalDonations.toLocaleString()}`}
            trend="up"
            trendValue="18.2%"
            icon="💰"
          />
          <KPICard
            title="Volunteer Hours"
            value={totalVolunteerHours.toLocaleString()}
            trend="up"
            trendValue="12.5%"
            icon="⏱️"
          />
          <KPICard
            title="People Served"
            value={totalBeneficiaries.toLocaleString()}
            trend="up"
            trendValue="24.1%"
            icon="🤝"
          />
          <KPICard
            title="Active Volunteers"
            value={activeVolunteers}
            trend="up"
            trendValue="8.3%"
            icon="👥"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChartCard title="Monthly Donation Trends">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={mockMonthlyDonations}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#6366f1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorAmount)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Volunteer Hours by Month">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={mockVolunteerHours}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Bar dataKey="hours" fill="#22d3ee" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChartCard title="Budget Allocation">
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={mockBudgetAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percentage }) => `${category} ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {mockBudgetAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Program Reach Growth">
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={mockProgramReach}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="quarter" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="beneficiaries"
                  stroke="#a855f7"
                  strokeWidth={3}
                  dot={{ fill: '#a855f7', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </div>
  )
}