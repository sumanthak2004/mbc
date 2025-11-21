import { User, Bell, Calendar, CreditCard, Lock, Globe, Smartphone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Switch } from './ui/switch';

export function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your profile and preferences</p>
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
                <button className="ml-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                  Remove
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
              <label className="text-sm text-slate-700 mb-2 block">Professional Title</label>
              <input
                type="text"
                defaultValue="Clinical Psychologist"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm text-slate-700 mb-2 block">License Number</label>
              <input
                type="text"
                defaultValue="PSY-12345-CA"
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

            <div>
              <label className="text-sm text-slate-700 mb-2 block">Bio</label>
              <textarea
                rows={4}
                defaultValue="Specialized in cognitive behavioral therapy with 10+ years of experience helping clients overcome anxiety and depression."
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
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
              <CardTitle className="text-base">Quick Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-slate-600" />
                  <span className="text-sm text-slate-900">Notifications</span>
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
              <CardTitle className="text-base">Account Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Plan</span>
                <span className="text-sm text-slate-900">Professional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Status</span>
                <span className="text-sm text-emerald-600">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Renewal</span>
                <span className="text-sm text-slate-900">Dec 15, 2025</span>
              </div>
              <button className="w-full mt-2 px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                Manage Subscription
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Preferences */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm text-slate-900">New Client Registration</div>
                <div className="text-xs text-slate-500 mt-0.5">Get notified when a new client registers</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm text-slate-900">Appointment Reminders</div>
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
                <div className="text-sm text-slate-900">Weekly Reports</div>
                <div className="text-xs text-slate-500 mt-0.5">Summary of your weekly activity</div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Calendar Integration */}
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader>
            <CardTitle>Calendar Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Google Calendar</div>
                    <div className="text-xs text-emerald-600">Connected</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs hover:bg-slate-50 transition-colors">
                  Disconnect
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Outlook Calendar</div>
                    <div className="text-xs text-slate-500">Not connected</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-xs hover:bg-cyan-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-900">Apple Calendar</div>
                    <div className="text-xs text-slate-500">Not connected</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-cyan-600 text-white rounded-lg text-xs hover:bg-cyan-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Settings */}
      <Card className="border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle>Security & Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-600" />
              <div>
                <div className="text-sm text-slate-900">Two-Factor Authentication</div>
                <div className="text-xs text-slate-500 mt-0.5">Add an extra layer of security</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-600" />
              <div>
                <div className="text-sm text-slate-900">Change Password</div>
                <div className="text-xs text-slate-500 mt-0.5">Last changed 3 months ago</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
              Update
            </button>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-slate-600" />
              <div>
                <div className="text-sm text-slate-900">Session History</div>
                <div className="text-xs text-slate-500 mt-0.5">View your login activity</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
              View
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-600" />
              <div>
                <div className="text-sm text-slate-900">Data Export</div>
                <div className="text-xs text-slate-500 mt-0.5">Download your account data</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
              Export
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
