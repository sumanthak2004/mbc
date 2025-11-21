import { useState } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';

export function MessagingPage() {
  const [selectedChat, setSelectedChat] = useState(1);

  const conversations = [
    {
      id: 1,
      client: 'Sarah Johnson',
      lastMessage: 'Thank you for the session today. Looking forward to next week!',
      time: '10 min ago',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      online: true,
    },
    {
      id: 2,
      client: 'Michael Chen',
      lastMessage: 'Can we reschedule our appointment for Thursday?',
      time: '1 hour ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      online: false,
    },
    {
      id: 3,
      client: 'Emily Rodriguez',
      lastMessage: 'I completed the assessment form you sent.',
      time: '3 hours ago',
      unread: 1,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      online: true,
    },
    {
      id: 4,
      client: 'David Thompson',
      lastMessage: 'Hi Dr. Smith, I have a question about my treatment plan.',
      time: '1 day ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      online: false,
    },
    {
      id: 5,
      client: 'Lisa Anderson',
      lastMessage: 'Thanks for checking in. Things are going well.',
      time: '2 days ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
      online: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: 'client',
      text: 'Hi Dr. Smith, I wanted to follow up on our session from yesterday.',
      time: '9:45 AM',
    },
    {
      id: 2,
      sender: 'therapist',
      text: 'Hello Sarah! Of course, how are you feeling today?',
      time: '9:47 AM',
    },
    {
      id: 3,
      sender: 'client',
      text: "I've been practicing the breathing exercises you taught me, and they're really helping with my anxiety.",
      time: '9:48 AM',
    },
    {
      id: 4,
      sender: 'therapist',
      text: "That's wonderful to hear! Consistency is key with those exercises. Have you noticed any particular times when they work best for you?",
      time: '9:50 AM',
    },
    {
      id: 5,
      sender: 'client',
      text: 'Mostly in the morning before work, and sometimes in the evening before bed.',
      time: '9:52 AM',
    },
    {
      id: 6,
      sender: 'therapist',
      text: "Perfect timing! Those are great moments to ground yourself. Keep up the excellent work, and we'll discuss your progress in our next session.",
      time: '9:55 AM',
    },
    {
      id: 7,
      sender: 'client',
      text: 'Thank you for the session today. Looking forward to next week!',
      time: '10:00 AM',
    },
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-slate-900">Secure Messaging</h1>
        <p className="text-slate-600 mt-1">Communicate securely with your clients</p>
      </div>

      <Card className="border-slate-200 rounded-2xl overflow-hidden h-[calc(100vh-200px)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-80 border-r border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation.id)}
                  className={`w-full flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors ${
                    selectedChat === conversation.id ? 'bg-slate-50' : ''
                  }`}
                >
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={conversation.image} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                        {conversation.client.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
                    )}
                  </div>

                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm text-slate-900">{conversation.client}</div>
                      <div className="text-xs text-slate-400">{conversation.time}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500 truncate pr-2">{conversation.lastMessage}</p>
                      {conversation.unread > 0 && (
                        <Badge className="w-5 h-5 flex items-center justify-center p-0 bg-cyan-500 text-white text-xs rounded-full">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={selectedConversation?.image} />
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-teal-500 text-white">
                    {selectedConversation?.client.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm text-slate-900">{selectedConversation?.client}</div>
                  <div className="text-xs text-slate-500">
                    {selectedConversation?.online ? 'Online' : 'Offline'}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                  View Profile
                </button>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'therapist' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${message.sender === 'therapist' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'therapist'
                          ? 'bg-gradient-to-br from-cyan-600 to-teal-600 text-white'
                          : 'bg-white text-slate-900 border border-slate-200'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div
                      className={`text-xs text-slate-400 mt-1 ${
                        message.sender === 'therapist' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex items-end gap-3">
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-slate-600" />
                </button>
                <div className="flex-1 relative">
                  <textarea
                    placeholder="Type your message..."
                    rows={2}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Smile className="w-5 h-5 text-slate-600" />
                </button>
                <button className="p-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-xl hover:from-cyan-700 hover:to-teal-700 transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="text-xs text-slate-500 mt-2">
                All messages are encrypted and HIPAA-compliant
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
