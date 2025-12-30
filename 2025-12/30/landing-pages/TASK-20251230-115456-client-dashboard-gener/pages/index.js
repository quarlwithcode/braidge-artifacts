import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']

const generateRevenueData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map((month, index) => ({
    month,
    revenue: 45000 + Math.floor(Math.random() * 35000) + (index * 3000),
    target: 60000 + (index * 2000),
  }))
}

const generateUserData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map((month, index) => ({
    month,
    users: 1200 + Math.floor(Math.random() * 800) + (index * 150),
    activeUsers: 900 + Math.floor(Math.random() * 600) + (index * 100),
  }))
}

const generateConversionData = () => [
  { name: 'Completed', value: 342, percentage: 68.4 },
  { name: 'Abandoned Cart', value: 89, percentage: 17.8 },
  { name: 'In Progress', value: 47, percentage: 9.4 },
  { name: 'Bounced', value: 22, percentage: 4.4 },
]

const generateChannelData = () => [
  { channel: 'Organic', conversions: 156, revenue: 78000 },
  { channel: 'Paid Ads', conversions: 134, revenue: 67000 },
  { channel: 'Social', conversions: 98, revenue: 49000 },
  { channel: 'Email', conversions: 87, revenue: 43500 },
  { channel: 'Referral', conversions: 45, revenue: 22500 },
]

const KPICard = ({ title, value, trend, trendValue, icon }) => (
  <div className="bg-dark-100 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 hover:border-gray-700">
    <div className="flex items-start justify-between mb-6">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
        <h3 className="text-4xl font-bold text-white">{value}</h3>
      </div>
      <div className="text-3xl">{icon}</div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`flex items-center gap-1 text-sm font-semibold ${
        trend === 'up' ? 'text-accent-secondary' : 'text-red-500'
      }`}>
        {trend === 'up' ? '↑' : '↓'} {trendValue}
      </span>
      <span className="text-gray-500 text-sm">vs last month</span>
    </div>
  </div>
)

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-100 border border-gray-800 rounded-xl p-4 shadow-xl">
        <p className="text-gray-300 font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Dashboard() {
  const [revenueData] = useState(generateRevenueData())
  const [userData] = useState(generateUserData())
  const [conversionData] = useState(generateConversionData())
  const [channelData] = useState(generateChannelData())

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0)
  const totalUsers = userData[userData.length - 1].users
  const conversionRate = conversionData[0].percentage
  const avgOrderValue = Math.round(totalRevenue / conversionData[0].value)

  return (
    <div className="min-h-screen bg-dark-200 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Sales Metrics Dashboard
          </h1>
          <p className="text-gray-400 text-lg">Real-time performance tracking and analytics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <KPICard
            title="Total Revenue"
            value={`$${(totalRevenue / 1000).toFixed(0)}K`}
            trend="up"
            trendValue="12.5%"
            icon="💰"
          />
          <KPICard
            title="Total Users"
            value={totalUsers.toLocaleString()}
            trend="up"
            trendValue="8.2%"
            icon="👥"
          />
          <KPICard
            title="Conversion Rate"
            value={`${conversionRate}%`}
            trend="up"
            trendValue="3.1%"
            icon="📈"
          />
          <KPICard
            title="Avg Order Value"
            value={`$${avgOrderValue}`}
            trend="down"
            trendValue="2.3%"
            icon="🛒"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-dark-100 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-8 text-white">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorTarget)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-dark-100 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-8 text-white">User Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
                <Line type="monotone" dataKey="activeUsers" stroke="#10b981" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-dark-100 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-8 text-white">Conversion Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-dark-100 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm bg-opacity-50">
            <h2 className="text-2xl font-bold mb-8 text-white">Revenue by Channel</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="channel" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ color: '#fff' }} />
                <Bar dataKey="conversions" fill="#6366f1" radius={[8, 8, 0, 0]} />
                <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}