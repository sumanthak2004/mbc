import { useState } from 'react';
import { DoctorSidebar } from './DoctorSidebar';
import { TopBar } from './TopBar';
import { DoctorHome } from './DoctorHome';
import { DoctorMyClients } from './DoctorMyClients';
import { DoctorAppointments } from './DoctorAppointments';
import { DoctorForms } from './DoctorForms';
import { MessagingPage } from './MessagingPage';
import { TelehealthPage } from './TelehealthPage';
import { DoctorSettings } from './DoctorSettings';

interface DoctorDashboardProps {
  userName: string;
  onLogout: () => void;
}

export function DoctorDashboard({ userName, onLogout }: DoctorDashboardProps) {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DoctorHome />;
      case 'my-clients':
        return <DoctorMyClients />;
      case 'appointments':
        return <DoctorAppointments />;
      case 'forms':
        return <DoctorForms />;
      case 'messaging':
        return <MessagingPage />;
      case 'telehealth':
        return <TelehealthPage />;
      case 'settings':
        return <DoctorSettings />;
      default:
        return <DoctorHome />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <DoctorSidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar userName={userName} userRole="Therapist" onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
