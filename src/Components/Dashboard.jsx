import React from 'react';
import Navbar2 from './Navbar2';
import AdminDashboard from './AdminDashboard';
import AgentDashboard from './AgentDashboard';
import useUserRole from '../hooks/useUserRole';
import UserDashboard from './UserDashboard';

const Dashboard = () => {
  const { userRole, loading } = useUserRole();
  console.log(userRole);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar2 />
      <h2>Dashboard</h2>
     
      {userRole === 'User' && <UserDashboard />}
      {userRole === 'agent' && <AgentDashboard />}
      {userRole === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default Dashboard;
