import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, FileText, Settings, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

export function TelehealthPage() {
  const upcomingSessions = [
    {
      id: 1,
      client: 'Sarah Johnson',
      time: '9:00 AM',
      duration: '60 min',
      status: 'ready',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      client: 'Michael Chen',
      time: '10:30 AM',
      duration: '50 min',
      status: 'waiting',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      client: 'Emily Rodriguez',
      time: '1:00 PM',
      duration: '60 min',
      status: 'scheduled',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-slate-900">Telehealth Sessions</h1>
        <p className="text-slate-600 mt-1">Secure video sessions with your clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Preview / Session Lobby */}
        <Card className="lg:col-span-2 border-slate-200 rounded-2xl">
          <CardContent className="p-0">
            {/* Video Area */}
            <div className="relative bg-slate-900 rounded-t-2xl aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
              
              {/* Your Video Preview */}
              <div className="relative z-10 text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white text-3xl">
                    DS
                  </AvatarFallback>
                </Avatar>
                <div className="text-white text-lg">Dr. Rebecca Smith</div>
                <div className="text-slate-400 text-sm mt-1">Your camera is on</div>
              </div>

              {/* Connection Status */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-emerald-500/90 rounded-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white text-sm">Ready to connect</span>
              </div>

              {/* Session Timer (when active) */}
              <div className="absolute top-4 right-4 px-3 py-2 bg-slate-800/90 rounded-lg">
                <span className="text-white text-sm">Waiting for client...</span>
              </div>
            </div>

            {/* Controls */}
            <div className="p-6 bg-white rounded-b-2xl">
              <div className="flex items-center justify-center gap-3 mb-6">
                <button className="w-14 h-14 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <Mic className="w-6 h-6 text-slate-700" />
                </button>
                <button className="w-14 h-14 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <Video className="w-6 h-6 text-slate-700" />
                </button>
                <button className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-full flex items-center justify-center transition-all shadow-lg">
                  <Video className="w-7 h-7 text-white" />
                </button>
                <button className="w-14 h-14 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors">
                  <MessageSquare className="w-6 h-6 text-slate-700" />
                </button>
                <button className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <PhoneOff className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Next Session</div>
                    <div className="text-xs text-slate-600">Sarah Johnson at 9:00 AM</div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                  Start Session
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Session Notes & Tools */}
        <div className="space-y-6">
          <Card className="border-slate-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Quick Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-slate-900">Session Notes</div>
                  <div className="text-xs text-slate-600">Take notes during call</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-slate-900">In-Session Chat</div>
                  <div className="text-xs text-slate-600">Text with client</div>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-slate-900">Settings</div>
                  <div className="text-xs text-slate-600">Audio/Video setup</div>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card className="border-slate-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Connection Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Connection</span>
                <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                  Excellent
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Audio Quality</span>
                <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                  Clear
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Video Quality</span>
                <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
                  HD
                </Badge>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  🔒 End-to-end encrypted • HIPAA compliant
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Today's Telehealth Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Avatar className="w-12 h-12">
                <AvatarImage src={session.image} />
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                  {session.client.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="text-slate-900">{session.client}</div>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-sm text-slate-500">{session.time}</span>
                  <span className="text-sm text-slate-400">•</span>
                  <span className="text-sm text-slate-500">{session.duration}</span>
                </div>
              </div>

              <Badge
                variant="outline"
                className={`${
                  session.status === 'ready'
                    ? 'border-emerald-300 text-emerald-700 bg-emerald-50'
                    : session.status === 'waiting'
                    ? 'border-cyan-300 text-cyan-700 bg-cyan-50'
                    : 'border-slate-300 text-slate-700 bg-slate-50'
                }`}
              >
                {session.status}
              </Badge>

              <div className="flex gap-2">
                {session.status === 'ready' && (
                  <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm hover:from-emerald-700 hover:to-teal-700 transition-all">
                    Join Now
                  </button>
                )}
                {session.status === 'waiting' && (
                  <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                    Join Session
                  </button>
                )}
                {session.status === 'scheduled' && (
                  <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Session Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Total Sessions</div>
            <div className="text-slate-900 mt-2">234</div>
            <div className="text-xs text-slate-500 mt-1">This month: 18</div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Avg. Session Duration</div>
            <div className="text-slate-900 mt-2">52 minutes</div>
            <div className="text-xs text-emerald-600 mt-1">Within target range</div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 rounded-2xl">
          <CardContent className="p-6">
            <div className="text-sm text-slate-600">Connection Quality</div>
            <div className="text-slate-900 mt-2">98.5%</div>
            <div className="text-xs text-emerald-600 mt-1">Excellent uptime</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
