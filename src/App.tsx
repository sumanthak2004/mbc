import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { AdminDashboard } from './components/AdminDashboard';
import { DoctorDashboard } from './components/DoctorDashboard';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'doctor' | null>(null);
  const [userName, setUserName] = useState('');

  const handleLogin = (role: 'admin' | 'doctor', name: string) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName('');z
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (userRole === 'admin') {
    return <AdminDashboard userName={userName} onLogout={handleLogout} />;
  }

  if (userRole === 'doctor') {
    return <DoctorDashboard userName={userName} onLogout={handleLogout} />;
  }

  return null;
}
