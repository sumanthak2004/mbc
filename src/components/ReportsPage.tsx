import { TrendingUp, Users, Calendar, DollarSign, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Reports & Analytics</h1>
          <p className="text-slate-600 mt-1">Track your practice performance and insights</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Client Growth</p>
                <p className="text-slate-900 mt-2">+24</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+18% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Sessions</p>
                <p className="text-slate-900 mt-2">128</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Revenue</p>
                <p className="text-slate-900 mt-2">$18,450</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15% vs last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Avg. Session Rate</p>
                <p className="text-slate-900 mt-2">$144</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                  <span>Stable rate</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Monthly Sessions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'November', sessions: 128, percentage: 95 },
                { month: 'October', sessions: 114, percentage: 85 },
                { month: 'September', sessions: 98, percentage: 73 },
                { month: 'August', sessions: 92, percentage: 68 },
                { month: 'July', sessions: 86, percentage: 64 },
                { month: 'June', sessions: 78, percentage: 58 },
              ].map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">{data.month}</span>
                    <span className="text-sm text-slate-900">{data.sessions} sessions</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-teal-500"
                      style={{ width: `${data.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Revenue by Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { month: 'November', revenue: 18450, percentage: 92 },
                { month: 'October', revenue: 16200, percentage: 81 },
                { month: 'September', revenue: 14800, percentage: 74 },
                { month: 'August', revenue: 13500, percentage: 68 },
                { month: 'July', revenue: 12200, percentage: 61 },
                { month: 'June', revenue: 11400, percentage: 57 },
              ].map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">{data.month}</span>
                    <span className="text-sm text-slate-900">${data.revenue.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                      style={{ width: `${data.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Client Demographics & Session Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Client Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Ages 18-29</span>
                  <span className="text-sm text-slate-900">32%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: '32%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Ages 30-44</span>
                  <span className="text-sm text-slate-900">45%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '45%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Ages 45-59</span>
                  <span className="text-sm text-slate-900">18%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500" style={{ width: '18%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Ages 60+</span>
                  <span className="text-sm text-slate-900">5%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500" style={{ width: '5%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Session Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Individual Therapy</span>
                  <span className="text-sm text-slate-900">62%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: '62%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Couples Therapy</span>
                  <span className="text-sm text-slate-900">23%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '23%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Group Sessions</span>
                  <span className="text-sm text-slate-900">10%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500" style={{ width: '10%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Family Therapy</span>
                  <span className="text-sm text-slate-900">5%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500" style={{ width: '5%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Key Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Client Retention Rate</div>
              <div className="text-slate-900">92%</div>
              <div className="text-xs text-emerald-600 mt-1">+3% from last quarter</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Avg. Sessions per Client</div>
              <div className="text-slate-900">8.4</div>
              <div className="text-xs text-slate-500 mt-1">Within target range</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Client Satisfaction</div>
              <div className="text-slate-900">4.8/5.0</div>
              <div className="text-xs text-emerald-600 mt-1">Based on 89 reviews</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">No-Show Rate</div>
              <div className="text-slate-900">3.2%</div>
              <div className="text-xs text-emerald-600 mt-1">Below industry avg.</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Avg. Response Time</div>
              <div className="text-slate-900">4.2 hours</div>
              <div className="text-xs text-slate-500 mt-1">To client messages</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600 mb-2">Practice Capacity</div>
              <div className="text-slate-900">78%</div>
              <div className="text-xs text-slate-500 mt-1">Weekly utilization</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
