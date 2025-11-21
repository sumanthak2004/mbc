import { Bell, Mail, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Switch } from './ui/switch';

export function DoctorSettings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-slate-900">My Profile & Settings</h1>
        <p className="text-slate-600 mt-1">Manage your personal information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <Card className="lg:col-span-2 border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" />
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white text-2xl">
                  DS
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg text-sm hover:bg-cyan-700 transition-colors">
                  Change Photo
                </button>
                <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF. Max size 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700 mb-2 block">First Name</label>
                <input
                  type="text"
                  defaultValue="Rebecca"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-slate-700 mb-2 block">Last Name</label>
                <input
                  type="text"
                  defaultValue="Smith"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-700 mb-2 block">Specialization</label>
              <input
                type="text"
                defaultValue="Clinical Psychology, CBT"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-700 mb-2 block">Email</label>
                <input
                  type="email"
                  defaultValue="dr.smith@mbctherapy.com"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-sm text-slate-700 mb-2 block">Phone</label>
                <input
                  type="tel"
                  defaultValue="(555) 123-4567"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm hover:bg-slate-200 transition-colors">
                Cancel
              </button>
              <button className="px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl text-sm hover:from-cyan-700 hover:to-teal-700 transition-all">
                Save Changes
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Settings */}
        <div className="space-y-6">
          <Card className="border-slate-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-900">Push Notifications</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-900">Email Alerts</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-900">SMS Reminders</span>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Status</span>
                <span className="text-sm text-emerald-600">Available</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Weekly Hours</span>
                <span className="text-sm text-slate-900">32 hours</span>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                Update Schedule
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notification Preferences */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <div className="text-sm text-slate-900">New Client Assignment</div>
              <div className="text-xs text-slate-500 mt-0.5">Get notified when assigned a new client</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <div className="text-sm text-slate-900">Session Reminders</div>
              <div className="text-xs text-slate-500 mt-0.5">15 minutes before each session</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div>
              <div className="text-sm text-slate-900">Client Messages</div>
              <div className="text-xs text-slate-500 mt-0.5">When clients send you a message</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <div className="text-sm text-slate-900">Form Completion</div>
              <div className="text-xs text-slate-500 mt-0.5">When clients complete assigned forms</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
