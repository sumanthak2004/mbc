import { FileText, CheckCircle2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function DoctorForms() {
  const myForms = [
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
      form: 'Progress Note',
      assigned: '3 days ago',
      status: 'in-progress',
      dueDate: 'Nov 18, 2025',
    },
    {
      id: 4,
      client: 'David Thompson',
      form: 'Intake Assessment',
      assigned: '5 hours ago',
      status: 'pending',
      dueDate: 'Nov 22, 2025',
    },
  ];

  const recentNotes = [
    { id: 1, client: 'Sarah Johnson', date: 'Nov 15, 2025', type: 'Progress Note' },
    { id: 2, client: 'Michael Chen', date: 'Nov 14, 2025', type: 'Session Note' },
    { id: 3, client: 'Emily Rodriguez', date: 'Nov 13, 2025', type: 'Treatment Plan' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-slate-900">Forms & Notes</h1>
        <p className="text-slate-600 mt-1">Manage assessments and progress notes</p>
      </div>

      {/* Assigned Forms */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle>Client Forms</CardTitle>
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
            {myForms.map((item) => (
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
                      Remind Client
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Notes */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">My Recent Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentNotes.map((note) => (
              <div
                key={note.id}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">{note.client}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{note.type}</div>
                </div>
                <div className="text-xs text-slate-400">{note.date}</div>
              </div>
            ))}
            <button className="w-full py-3 text-sm text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors">
              View All Notes →
            </button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div>
                <div className="text-sm text-slate-900">Forms Pending Review</div>
                <div className="text-xs text-slate-500 mt-0.5">Awaiting your action</div>
              </div>
              <div className="text-slate-900">3</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div>
                <div className="text-sm text-slate-900">Notes This Week</div>
                <div className="text-xs text-slate-500 mt-0.5">Progress documentation</div>
              </div>
              <div className="text-slate-900">12</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
              <div>
                <div className="text-sm text-slate-900">Completed Assessments</div>
                <div className="text-xs text-slate-500 mt-0.5">This month</div>
              </div>
              <div className="text-slate-900">24</div>
            </div>

            <button className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl text-sm hover:from-cyan-700 hover:to-teal-700 transition-all">
              Create New Note
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
