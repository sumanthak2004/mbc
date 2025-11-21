import { Calendar, Clock, Plus, FileText, Users, CheckCircle2, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useState } from 'react';

export function DoctorHome() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);

  const todaysSessions = [
    { id: 1, client: 'Sarah Johnson', time: '9:00 AM', type: 'Initial Consultation', status: 'upcoming' },
    { id: 2, client: 'Michael Chen', time: '10:30 AM', type: 'Follow-up Session', status: 'upcoming' },
    { id: 3, client: 'Emily Rodriguez', time: '1:00 PM', type: 'Therapy Session', status: 'upcoming' },
    { id: 4, client: 'David Thompson', time: '2:30 PM', type: 'CBT Session', status: 'upcoming' },
    { id: 5, client: 'Lisa Anderson', time: '4:00 PM', type: 'Couples Therapy', status: 'upcoming' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Complete progress notes for Sarah Johnson', type: 'note', priority: 'high' },
    { id: 2, task: 'Review intake form for Michael Chen', type: 'form', priority: 'medium' },
    { id: 3, task: 'Respond to message from Emily Rodriguez', type: 'message', priority: 'high' },
    { id: 4, task: 'Upload treatment plan for David Thompson', type: 'document', priority: 'low' },
  ];

  const quickActions = [
    { icon: Calendar, label: 'Schedule Session', color: 'from-cyan-500 to-teal-500', action: () => setShowAppointmentModal(true) },
    { icon: FileText, label: 'Add Progress Note', color: 'from-blue-500 to-cyan-500', action: () => setShowAddNoteModal(true) },
    { icon: Plus, label: 'Add Client', color: 'from-teal-500 to-emerald-500', action: () => {} },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-slate-900">Welcome back, Doctor</h1>
        <p className="text-slate-600 mt-1">Here's your schedule and tasks for today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Today's Sessions</p>
                <p className="text-slate-900 mt-2">5</p>
                <div className="text-xs text-slate-500 mt-1">Next at 9:00 AM</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">My Clients</p>
                <p className="text-slate-900 mt-2">28</p>
                <div className="text-xs text-emerald-600 mt-1">+2 this week</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">Pending Tasks</p>
                <p className="text-slate-900 mt-2">4</p>
                <div className="text-xs text-amber-600 mt-1">2 high priority</div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-600">This Week</p>
                <p className="text-slate-900 mt-2">22 sessions</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-emerald-600">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>12 completed</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 border-slate-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <span>Today's Schedule</span>
              <Badge variant="outline" className="text-xs">5 sessions</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaysSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl border border-slate-200">
                  <div className="text-center">
                    <div className="text-xs text-slate-500">
                      {session.time.split(' ')[1]}
                    </div>
                    <div className="text-sm text-slate-900">
                      {session.time.split(' ')[0]}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-slate-900">{session.client}</div>
                  <div className="text-sm text-slate-500">{session.type}</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                    Details
                  </button>
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                    Start Session
                  </button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="w-full flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-slate-900">{action.label}</span>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setShowAppointmentModal(false)}
          />
          
          {/* Modal Card */}
          <Card className="relative w-full max-w-lg border-slate-200 rounded-2xl shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Create New Appointment</CardTitle>
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-slate-700 mb-2 block">Doctor Name</label>
                <input
                  type="text"
                  defaultValue="Dr. Rebecca Smith"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Patient Name</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Select a patient</option>
                  <option>Sarah Johnson</option>
                  <option>Michael Chen</option>
                  <option>Emily Rodriguez</option>
                  <option>David Thompson</option>
                  <option>Lisa Anderson</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Date</label>
                <input
                  type="date"
                  defaultValue="2025-11-18"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Time</label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Duration (minutes)</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>30</option>
                  <option>45</option>
                  <option selected>60</option>
                  <option>90</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Session Type</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Initial Consultation</option>
                  <option>Follow-up Session</option>
                  <option>Therapy Session</option>
                  <option>CBT Session</option>
                  <option>Couples Therapy</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle appointment creation
                    setShowAppointmentModal(false);
                  }}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl text-sm hover:from-cyan-700 hover:to-teal-700 transition-all"
                >
                  Create Appointment
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Note Modal */}
      {showAddNoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setShowAddNoteModal(false)}
          />
          
          {/* Modal Card */}
          <Card className="relative w-full max-w-lg border-slate-200 rounded-2xl shadow-2xl">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Add Progress Note</CardTitle>
                <button
                  onClick={() => setShowAddNoteModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-slate-700 mb-2 block">Date</label>
                <input
                  type="date"
                  defaultValue="2025-11-18"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Session Type</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option>Initial Consultation</option>
                  <option>Follow-up Session</option>
                  <option>Therapy Session</option>
                  <option>CBT Session</option>
                  <option>Couples Therapy</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-700 mb-2 block">Notes</label>
                <textarea
                  placeholder="Enter progress notes here..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  rows={8}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddNoteModal(false)}
                  className="flex-1 px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle note creation
                    setShowAddNoteModal(false);
                  }}
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl text-sm hover:from-cyan-700 hover:to-teal-700 transition-all"
                >
                  Add Note
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Pending Tasks */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <CardTitle>Pending Tasks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pendingTasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded border-2 border-slate-300 hover:border-cyan-500 transition-colors" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-900">{task.task}</div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      task.type === 'note'
                        ? 'border-blue-300 text-blue-700 bg-blue-50'
                        : task.type === 'form'
                        ? 'border-purple-300 text-purple-700 bg-purple-50'
                        : task.type === 'message'
                        ? 'border-cyan-300 text-cyan-700 bg-cyan-50'
                        : 'border-slate-300 text-slate-700 bg-slate-50'
                    }`}
                  >
                    {task.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      task.priority === 'high'
                        ? 'border-red-300 text-red-700 bg-red-50'
                        : task.priority === 'medium'
                        ? 'border-amber-300 text-amber-700 bg-amber-50'
                        : 'border-slate-300 text-slate-700 bg-slate-50'
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* This Week Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Sessions Completed</div>
            <div className="text-slate-900 mt-2">12 / 22</div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-3">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: '55%' }} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">New Messages</div>
            <div className="text-slate-900 mt-2">8 unread</div>
            <div className="text-xs text-cyan-600 mt-1">3 require response</div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Forms Pending</div>
            <div className="text-slate-900 mt-2">3 to review</div>
            <div className="text-xs text-slate-500 mt-1">2 completed today</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}