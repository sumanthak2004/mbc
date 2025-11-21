import { ChevronLeft, ChevronRight, Video, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function DoctorAppointments() {
  const appointments = [
    {
      id: 1,
      client: 'Sarah Johnson',
      time: '9:00 AM',
      duration: '60 min',
      type: 'video',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      client: 'Michael Chen',
      time: '10:30 AM',
      duration: '50 min',
      type: 'in-person',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      client: 'Emily Rodriguez',
      time: '1:00 PM',
      duration: '60 min',
      type: 'video',
      status: 'confirmed',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      id: 4,
      client: 'David Thompson',
      time: '2:30 PM',
      duration: '90 min',
      type: 'in-person',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  const weekDays = ['Mon 17', 'Tue 18', 'Wed 19', 'Thu 20', 'Fri 21'];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-slate-900">My Appointments</h1>
        <p className="text-slate-600 mt-1">View and manage your session schedule</p>
      </div>

      <Card className="border-slate-200 rounded-2xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <div className="text-slate-900">This Week - November 17-21, 2025</div>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
              <button className="px-3 py-1.5 text-sm text-cyan-600 hover:bg-cyan-50 rounded-lg transition-colors">
                Today
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Simple Week View */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className={`p-4 rounded-xl text-center cursor-pointer transition-colors ${
                  index === 0
                    ? 'bg-gradient-to-br from-cyan-50 to-teal-50 border-2 border-cyan-200'
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="text-xs text-slate-500">{day.split(' ')[0]}</div>
                <div className={`mt-1 ${index === 0 ? 'text-cyan-900' : 'text-slate-900'}`}>
                  {day.split(' ')[1]}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  {index === 0 ? '5 sessions' : `${Math.floor(Math.random() * 4) + 2} sessions`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Today's Appointments List */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Today's Sessions - Monday, November 17</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={appointment.image} />
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                  {appointment.client.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="text-slate-900">{appointment.client}</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-slate-500">{appointment.time}</span>
                  <span className="text-sm text-slate-400">•</span>
                  <span className="text-sm text-slate-500">{appointment.duration}</span>
                  <div className="flex items-center gap-1">
                    {appointment.type === 'video' && (
                      <>
                        <Video className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm text-cyan-600">Video Call</span>
                      </>
                    )}
                    {appointment.type === 'in-person' && (
                      <>
                        <MapPin className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-teal-600">In-Person</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <Badge
                variant="outline"
                className={`${
                  appointment.status === 'confirmed'
                    ? 'border-emerald-300 text-emerald-700 bg-emerald-50'
                    : 'border-amber-300 text-amber-700 bg-amber-50'
                }`}
              >
                {appointment.status}
              </Badge>

              <div className="flex gap-2">
                {appointment.type === 'video' && (
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                    Join Session
                  </button>
                )}
                <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Week Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">This Week</div>
            <div className="text-slate-900 mt-2">22 appointments</div>
            <div className="text-xs text-slate-500 mt-1">12 completed, 10 upcoming</div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Video Sessions</div>
            <div className="text-slate-900 mt-2">14 sessions</div>
            <div className="text-xs text-cyan-600 mt-1">64% of total</div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Available Slots</div>
            <div className="text-slate-900 mt-2">6 this week</div>
            <div className="text-xs text-slate-500 mt-1">Accepting bookings</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
