import { Search, Phone, Mail, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function DoctorMyClients() {
  const myClients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 's.johnson@email.com',
      phone: '(555) 123-4567',
      status: 'active',
      lastSession: '2 days ago',
      nextSession: 'Today, 9:00 AM',
      plan: 'CBT - 8 sessions',
      sessions: 3,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'm.chen@email.com',
      phone: '(555) 234-5678',
      status: 'active',
      lastSession: '1 week ago',
      nextSession: 'Today, 10:30 AM',
      plan: 'Individual Therapy',
      sessions: 8,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      phone: '(555) 345-6789',
      status: 'active',
      lastSession: '3 days ago',
      nextSession: 'Today, 1:00 PM',
      plan: 'Anxiety Management',
      sessions: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      name: 'David Thompson',
      email: 'd.thompson@email.com',
      phone: '(555) 456-7890',
      status: 'new',
      lastSession: 'N/A',
      nextSession: 'Tomorrow, 2:30 PM',
      plan: 'Initial Assessment',
      sessions: 0,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900">My Clients</h1>
          <p className="text-slate-600 mt-1">Manage your assigned clients</p>
        </div>
      </div>

      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-lg text-xs">
              All Clients ({myClients.length})
            </button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
              Active
            </button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs hover:bg-slate-200">
              New
            </button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {myClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <Avatar className="w-14 h-14">
                  <AvatarImage src={client.image} />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 grid grid-cols-5 gap-4">
                  <div>
                    <div className="text-sm text-slate-900">{client.name}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <Mail className="w-3 h-3" />
                      {client.email}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Treatment Plan</div>
                    <div className="text-sm text-slate-700 mt-0.5">{client.plan}</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Sessions</div>
                    <div className="text-sm text-slate-700 mt-0.5">{client.sessions} completed</div>
                  </div>

                  <div>
                    <div className="text-xs text-slate-500">Next Session</div>
                    <div className="text-sm text-slate-700 mt-0.5">{client.nextSession}</div>
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        client.status === 'active'
                          ? 'border-emerald-300 text-emerald-700 bg-emerald-50'
                          : 'border-cyan-300 text-cyan-700 bg-cyan-50'
                      }`}
                    >
                      {client.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Phone className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <Mail className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-white rounded-lg transition-colors">
                    <FileText className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Client Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-cyan-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-900">Progress note added</div>
                <div className="text-xs text-slate-500 mt-0.5">Sarah Johnson • 2 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-teal-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-900">Session completed</div>
                <div className="text-xs text-slate-500 mt-0.5">Michael Chen • 4 hours ago</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-slate-900">New client assigned</div>
                <div className="text-xs text-slate-500 mt-0.5">David Thompson • 1 day ago</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">This Week's Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Monday</span>
                <span className="text-slate-900">4 sessions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Tuesday</span>
                <span className="text-slate-900">5 sessions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Wednesday</span>
                <span className="text-slate-900">6 sessions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Thursday</span>
                <span className="text-slate-900">3 sessions</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Friday</span>
                <span className="text-slate-900">4 sessions</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base">Client Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">On Track</span>
                  <span className="text-sm text-slate-900">75%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500" style={{ width: '75%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Needs Attention</span>
                  <span className="text-sm text-slate-900">15%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: '15%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">New Clients</span>
                  <span className="text-sm text-slate-900">10%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: '10%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
