import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [UserObject, setUserObject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = document.cookie
      ? document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1]
      : null;

    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      setUserObject(JSON.parse(jsonPayload));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {UserObject?.roles.includes("ROLE_USER") ? (
        // <Navigate to="../Admin/AdminIndex" />
        <>UserPage Doesnt exist yet, this is just a placeholder.</>
      ) : UserObject?.roles.includes("ROLE_ADMIN") ? (
        <Navigate to="../Admin/AdminIndex" />
      ) : (
        <p style={{ color: 'red' }}>UserObject Could not be retrieved</p>
      )}

      <button
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      >
        Uitloggen
      </button>
    </div>
  );
};
