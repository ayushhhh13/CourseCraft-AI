import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../components/Layout";

const Dashboard = () => {
  const { user } = useAuth0();

  // Mock data for courses
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React components, state, and props.', image: 'https://cdn.auth0.com/blog/react-js/react.png' },
    { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into generics, utility types, and advanced patterns.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { id: 3, title: 'AI for Beginners', description: 'Understanding neural networks, ML basics, and practical applications.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Artificial_intelligence_topic_image.svg' },
    { id: 4, title: 'Node.js Backend', description: 'Build scalable REST APIs with Node.js and Express.', image: 'https://nodejs.org/static/images/logo.svg' },
  ];

  return (
    <Layout>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#f7fafc', marginBottom: '0.5rem' }}>Welcome back, {user?.given_name || user?.name}!</h2>
        <p style={{ color: '#a0aec0' }}>Here are your enrolled courses.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        {courses.map(course => (
          <div key={course.id} style={{ 
            backgroundColor: '#2d313c', 
            borderRadius: '15px', 
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: '160px', backgroundColor: '#4a5568', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
               {/* Placeholder for course image */}
               <img src={course.image} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#e2e8f0' }}>{course.title}</h4>
              <p style={{ color: '#a0aec0', margin: 0, lineHeight: '1.5', fontSize: '0.95rem' }}>{course.description}</p>
              <button style={{ 
                marginTop: '1.5rem', 
                width: '100%', 
                padding: '0.75rem', 
                backgroundColor: '#3182ce', 
                color: 'white', 
                border: 'none', 
                borderRadius: '0.375rem', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
