import { useState } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Mock data generators
const generateSalesData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map((month, index) => ({
    month,
    revenue: Math.floor(45000 + Math.random() * 30000 + index * 2000),
    orders: Math.floor(180 + Math.random() * 120 + index * 8),
  }))
}

const generateCategoryData = () => [
  { name: 'Electronics', value: 342500, percentage: 38 },
  { name: 'Clothing', value: 256800, percentage: 28 },
  { name: 'Home & Garden', value: 182400, percentage: 20 },
  { name: 'Sports', value: 127300, percentage: 14 },
]

const generateTopProducts = () => [
  { product: 'Wireless Headphones', sales: 45200, units: 1240 },
  { product: 'Smart Watch Pro', sales: 38900, units: 890 },
  { product: 'Running Shoes', sales: 32100, units: 1560 },
  { product: 'Coffee Maker', sales: 28400, units: 720 },
  { product: 'Yoga Mat', sales: 21800, units: 2180 },
]

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444']

export default function Dashboard() {
  const [salesData] = useState(generateSalesData())
  const [categoryData] = useState(generateCategoryData())
  const [topProducts] = useState(generateTopProducts())

  const kpis = [
    {
      title: 'Total Revenue',
      value: '$742,580',
      change: '+12.5%',
      trending: 'up',
      period: 'vs last month',
    },
    {
      title: 'Total Orders',
      value: '3,247',
      change: '+8.2%',
      trending: 'up',
      period: 'vs last month',
    },
    {
      title: 'Conversion Rate',
      value: '3.8%',
      change: '+0.4%',
      trending: 'up',
      period: 'vs last month',
    },
    {
      title: 'Avg Order Value',
      value: '$228.67',
      change: '-2.1%',
      trending: 'down',
      period: 'vs last month',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="border-b border-dark-600 bg-dark-800/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Sales Dashboard</h1>
              <p className="mt-2 text-sm text-gray-400">Monitor your sales performance and metrics</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-dark-700 px-4 py-2 text-sm font-medium transition-all hover:bg-dark-600">
                Last 30 Days
              </button>
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium transition-all hover:bg-primary/90">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* KPI Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-dark-600 bg-dark-800/50 p-6 backdrop-blur-xl transition-all hover:border-dark-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-400">{kpi.title}</p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">{kpi.value}</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      kpi.trending === 'up' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                    }`}
                  >
                    {kpi.trending === 'up' ? '↑' : '↓'}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      kpi.trending === 'up' ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {kpi.change}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{kpi.period}</span>
              </div>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10"></div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Revenue Trend */}
          <div className="rounded-2xl border border-dark-600 bg-dark-800/50 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Revenue Trend</h2>
              <p className="mt-1 text-sm text-gray-400">Monthly revenue over the past year</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#232330" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a24',
                    border: '1px solid #232330',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                  formatter={(value) => `$${value.toLocaleString()}`}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', r: 4 }}
                  activeDot={{ r: 6 }}
                  fill="url(#colorRevenue)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Orders Trend */}
          <div className="rounded-2xl border border-dark-600 bg-dark-800/50 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Order Volume</h2>
              <p className="mt-1 text-sm text-gray-400">Number of orders per month</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#232330" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a24',
                    border: '1px solid #232330',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                  formatter={(value) => `${value.toLocaleString()} orders`}
                />
                <Bar dataKey="orders" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category Breakdown */}
          <div className="rounded-2xl border border-dark-600 bg-dark-800/50 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Sales by Category</h2>
              <p className="mt-1 text-sm text-gray-400">Revenue distribution across categories</p>
            </div>
            <div className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1a1a24',
                      border: '1px solid #232330',
                      borderRadius: '8px',
                      fontSize: '14px',
                    }}
                    formatter={(value) => `$${value.toLocaleString()}`}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-6 grid w-full grid-cols-2 gap-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{category.name}</p>
                      <p className="text-xs text-gray-400">{category.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="rounded-2xl border border-dark-600 bg-dark-800/50 p-8 backdrop-blur-xl">
            <div className="mb-8">
              <h2 className="text-xl font-bold">Top Products</h2>
              <p className="mt-1 text-sm text-gray-400">Best selling products this month</p>
            </div>
            <div className="space-y-6">
              {topProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium transition-colors group-hover:text-primary">
                          {product.product}
                        </p>
                        <p className="text-xs text-gray-400">{product.units.toLocaleString()} units</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold">${product.sales.toLocaleString()}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-dark-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-success transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20"
                      style={{
                        width: `${(product.sales / topProducts[0].sales) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}