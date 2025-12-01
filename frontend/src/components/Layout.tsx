import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user, isAuthenticated } = useAuth0();
  const location = useLocation();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1a1e27' }}>
      <nav style={{ 
        backgroundColor: '#2d313c', 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#f7fafc', fontSize: '1.5rem', fontWeight: 'bold' }}>
          CourseCraft AI
        </Link>
        
        {isAuthenticated && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {location.pathname !== '/dashboard' && (
              <Link to="/dashboard" style={{ color: '#cbd5e0', textDecoration: 'none', fontWeight: 500 }}>
                Dashboard
              </Link>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link to="/profile" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#cbd5e0' }}>
                <img 
                  src={user?.picture} 
                  alt={user?.name} 
                  style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #63b3ed' }} 
                />
                <span className="user-name-responsive">{user?.name}</span>
              </Link>
              <LogoutButton />
            </div>
          </div>
        )}
      </nav>
      
      <main style={{ flex: 1, padding: '2rem', width: '100%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
