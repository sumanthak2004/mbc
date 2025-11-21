import { Search, Filter, Plus, Download, DollarSign, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function BillingPage() {
  const invoices = [
    {
      id: 'INV-001',
      client: 'Sarah Johnson',
      amount: 150.00,
      date: 'Nov 15, 2025',
      dueDate: 'Nov 30, 2025',
      status: 'paid',
      service: 'Individual Therapy Session',
    },
    {
      id: 'INV-002',
      client: 'Michael Chen',
      amount: 120.00,
      date: 'Nov 14, 2025',
      dueDate: 'Nov 29, 2025',
      status: 'pending',
      service: 'Follow-up Session',
    },
    {
      id: 'INV-003',
      client: 'Emily Rodriguez',
      amount: 180.00,
      date: 'Nov 13, 2025',
      dueDate: 'Nov 28, 2025',
      status: 'paid',
      service: 'Extended Therapy Session',
    },
    {
      id: 'INV-004',
      client: 'David Thompson',
      amount: 200.00,
      date: 'Nov 12, 2025',
      dueDate: 'Nov 27, 2025',
      status: 'overdue',
      service: 'Initial Assessment',
    },
    {
      id: 'INV-005',
      client: 'Lisa Anderson',
      amount: 250.00,
      date: 'Nov 11, 2025',
      dueDate: 'Nov 26, 2025',
      status: 'paid',
      service: 'Couples Therapy Session',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Billing & Invoices</h1>
          <p className="text-slate-600 mt-1">Manage payments and financial records</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all">
          <Plus className="w-4 h-4" />
          Create Invoice
        </button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Total Revenue</p>
                <p className="text-slate-900 mt-2">$18,450</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  <span>+15.3% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Pending Payments</p>
                <p className="text-slate-900 mt-2">$2,340</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                  <span>12 invoices</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Paid This Month</p>
                <p className="text-slate-900 mt-2">$14,250</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>42 invoices</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Overdue</p>
                <p className="text-slate-900 mt-2">$860</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-red-600">
                  <span>3 invoices</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Invoices Table */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search invoices, clients..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-100 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-lg text-xs">
              All Invoices
            </button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
              Paid
            </button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
              Pending
            </button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
              Overdue
            </button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="flex-1 grid grid-cols-6 gap-4">
                  <div>
                    <div className="text-sm text-slate-900">{invoice.id}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{invoice.date}</div>
                  </div>

                  <div className="col-span-2">
                    <div className="text-sm text-slate-900">{invoice.client}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{invoice.service}</div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-900">${invoice.amount.toFixed(2)}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Amount</div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-700">Due: {invoice.dueDate}</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {invoice.status === 'overdue' ? 'Past due' : 'On time'}
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <Badge
                      variant="outline"
                      className={`${
                        invoice.status === 'paid'
                          ? 'border-emerald-300 text-emerald-700 bg-emerald-50'
                          : invoice.status === 'pending'
                          ? 'border-amber-300 text-amber-700 bg-amber-50'
                          : 'border-red-300 text-red-700 bg-red-50'
                      }`}
                    >
                      {invoice.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                    View
                  </button>
                  {invoice.status !== 'paid' && (
                    <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                      Send Reminder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">Showing 1-5 of 54 invoices</div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                  Previous
                </button>
                <button className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods & Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Payment Methods</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Credit Card</div>
                    <div className="text-xs text-slate-500">Primary method</div>
                  </div>
                </div>
                <span className="text-sm text-slate-900">87%</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Bank Transfer</div>
                    <div className="text-xs text-slate-500">Secondary method</div>
                  </div>
                </div>
                <span className="text-sm text-slate-900">10%</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Insurance</div>
                    <div className="text-xs text-slate-500">Alternative method</div>
                  </div>
                </div>
                <span className="text-sm text-slate-900">3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">November</span>
                  <span className="text-sm text-slate-900">$18,450</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">October</span>
                  <span className="text-sm text-slate-900">$16,200</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '81%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">September</span>
                  <span className="text-sm text-slate-900">$14,800</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500" style={{ width: '74%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">August</span>
                  <span className="text-sm text-slate-900">$13,500</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-blue-500" style={{ width: '68%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
