import { Search, Filter, Plus, FileText, CheckCircle2, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function FormsPage() {
  const standardForms = [
    { id: 1, name: 'PHQ-9 (Depression)', description: 'Patient Health Questionnaire', uses: 234 },
    { id: 2, name: 'GAD-7 (Anxiety)', description: 'Generalized Anxiety Disorder Assessment', uses: 198 },
    { id: 3, name: 'Intake Assessment', description: 'Initial client evaluation form', uses: 142 },
    { id: 4, name: 'Progress Note Template', description: 'Session documentation', uses: 456 },
    { id: 5, name: 'Treatment Plan', description: 'Comprehensive treatment planning', uses: 87 },
    { id: 6, name: 'Consent Form', description: 'Treatment consent and HIPAA', uses: 142 },
  ];

  const assignedForms = [
    {
      id: 1,
      client: 'Sarah Johnson',
      form: 'PHQ-9',
      assigned: '2 days ago',
      status: 'completed',
      dueDate: 'Nov 15, 2025',
    },
    {
      id: 2,
      client: 'Michael Chen',
      form: 'GAD-7',
      assigned: '1 week ago',
      status: 'pending',
      dueDate: 'Nov 20, 2025',
    },
    {
      id: 3,
      client: 'Emily Rodriguez',
      form: 'Intake Assessment',
      assigned: '3 days ago',
      status: 'in-progress',
      dueDate: 'Nov 18, 2025',
    },
    {
      id: 4,
      client: 'David Thompson',
      form: 'Consent Form',
      assigned: '5 hours ago',
      status: 'pending',
      dueDate: 'Nov 22, 2025',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">Forms & Assessments</h1>
          <p className="text-slate-600 mt-1">Manage standardized forms and client assessments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all">
          <Plus className="w-4 h-4" />
          Create Custom Form
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Standard Forms Library */}
        <Card className="lg:col-span-2 border-slate-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle>Standard Forms Library</CardTitle>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search forms..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {standardForms.map((form) => (
                <div
                  key={form.id}
                  className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-slate-900">{form.name}</div>
                      <div className="text-xs text-slate-500 mt-1">{form.description}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-slate-400">Used {form.uses} times</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs hover:bg-slate-50 transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-xs hover:bg-cyan-700 transition-colors">
                      Assign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl hover:from-cyan-100 hover:to-teal-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm text-slate-900">Assign Form</div>
                <div className="text-xs text-slate-600">Send to client</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm text-slate-900">View Completed</div>
                <div className="text-xs text-slate-600">Review responses</div>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm text-slate-900">Create Template</div>
                <div className="text-xs text-slate-600">Custom form</div>
              </div>
            </button>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 mb-3">Form Statistics</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Pending</span>
                  <span className="text-sm text-slate-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">In Progress</span>
                  <span className="text-sm text-slate-900">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Completed</span>
                  <span className="text-sm text-slate-900">234</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Assigned Forms */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle>Recently Assigned Forms</CardTitle>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-lg text-xs">
                All
              </button>
              <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
                Pending
              </button>
              <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
                Completed
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {assignedForms.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="flex-1 grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-slate-900">{item.client}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.form}</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Assigned</div>
                    <div className="text-sm text-slate-700 mt-0.5">{item.assigned}</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Due Date</div>
                    <div className="text-sm text-slate-700 mt-0.5">{item.dueDate}</div>
                  </div>

                  <div className="flex items-center justify-end">
                    <Badge
                      variant="outline"
                      className={`${
                        item.status === 'completed'
                          ? 'border-emerald-300 text-emerald-700 bg-emerald-50'
                          : item.status === 'in-progress'
                          ? 'border-blue-300 text-blue-700 bg-blue-50'
                          : 'border-amber-300 text-amber-700 bg-amber-50'
                      }`}
                    >
                      {item.status === 'completed' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                      {item.status === 'in-progress' && <Clock className="w-3 h-3 mr-1" />}
                      {item.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  {item.status === 'completed' ? (
                    <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                      View Results
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                      Send Reminder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
