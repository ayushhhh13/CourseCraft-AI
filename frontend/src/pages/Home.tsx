import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";

const Home = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading-text">Loading...</div>;
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: 'linear-gradient(135deg, #1a1e27 0%, #2d3748 100%)',
      color: '#f7fafc',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: '800', 
          marginBottom: '1.5rem', 
          background: 'linear-gradient(to right, #63b3ed, #9f7aea)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.2
        }}>
          CourseCraft AI
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#cbd5e0', marginBottom: '3rem', lineHeight: 1.6 }}>
          Unlock your potential with AI-generated courses tailored just for you. Learn faster, smarter, and more effectively.
        </p>
        
        {isAuthenticated ? (
          <div style={{ animation: 'fadeIn 1s ease-out' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#68d391' }}>Welcome back!</p>
            <Link 
              to="/dashboard" 
              className="button"
              style={{
                display: 'inline-block',
                padding: '1rem 2.5rem',
                backgroundColor: '#3182ce',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.2rem',
                boxShadow: '0 10px 25px rgba(49, 130, 206, 0.5)',
                transition: 'transform 0.2s'
              }}
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 1s ease-out' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#a0aec0' }}>Join thousands of learners today.</p>
            <div style={{ transform: 'scale(1.2)' }}>
              <LoginButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
