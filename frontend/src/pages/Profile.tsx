import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../components/Layout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading-text">Loading profile...</div>;
  }

  return (
    isAuthenticated && user ? (
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginTop: '2rem', width: '100%' }}>
          <div className="main-card-wrapper" style={{ width: '90%', maxWidth: '600px', padding: '2rem', boxSizing: 'border-box' }}>
            <img 
              src={user.picture} 
              alt={user.name} 
              className="profile-picture"
              style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                objectFit: 'cover',
                border: '4px solid #63b3ed',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#f7fafc', marginBottom: '0.5rem' }}>
                {user.name}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#a0aec0', margin: 0 }}>
                {user.email}
              </p>
            </div>
            
            <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', marginTop: '1rem' }}>
               <h3 style={{ color: '#e2e8f0', marginBottom: '1rem' }}>Account Details</h3>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem', color: '#cbd5e0' }}>
                 <div style={{ fontWeight: '600', color: '#a0aec0' }}>Nickname:</div>
                 <div>{user.nickname}</div>
                 <div style={{ fontWeight: '600', color: '#a0aec0' }}>Updated:</div>
                 <div>{new Date(user.updated_at || '').toLocaleDateString()}</div>
                 <div style={{ fontWeight: '600', color: '#a0aec0' }}>Email Verified:</div>
                 <div>{user.email_verified ? 'Yes' : 'No'}</div>
               </div>
            </div>
            
            <div style={{ marginTop: '2rem', width: '100%', textAlign: 'left' }}>
              <details>
                <summary style={{ cursor: 'pointer', color: '#a0aec0' }}>Debug: Raw User Data</summary>
                <pre style={{ 
                  backgroundColor: '#1a202c', 
                  padding: '1rem', 
                  borderRadius: '0.5rem', 
                  overflowX: 'auto', 
                  color: '#68d391',
                  fontSize: '0.85rem',
                  marginTop: '0.5rem'
                }}>
                  {JSON.stringify(user, null, 2)}
                </pre>
              </details>
            </div>
          </div>
        </div>
      </Layout>
    ) : null
  );
};

export default Profile;