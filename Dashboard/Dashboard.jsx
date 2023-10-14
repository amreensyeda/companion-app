// Dashboard.jsx

// Import useState and DashboardContent
import React, { useState } from 'react';
import './dashboard.css';
import DashboardContent from './DashboardContent';
import Tasks from './Tasks';

function Dashboard() {
  const [showDashboardContent, setShowDashboardContent] = useState(true);
  const [removedTasks, setRemovedTasks] = useState([]); // State to store removed tasks

  const handleLinkClick = (componentToShow) => {
    setShowDashboardContent(componentToShow === 'dashboard');
  }

  // Callback function to handle removed tasks and add them to the removedTasks state
  const handleTaskRemove = (task) => {
    setRemovedTasks([...removedTasks, task]);
  }

  return (
    <div>
      <nav className='navbar-section'>
        <a href='#' onClick={() => handleLinkClick('dashboard')}>Dashboard</a>
        <a href='#' onClick={() => handleLinkClick('tasks')}>Tasks</a>
      </nav>

      {showDashboardContent ? (
        <DashboardContent removedTasks={removedTasks} /> // Pass removed tasks to DashboardContent
      ) : (
        <Tasks onTaskRemove={handleTaskRemove} /> // Pass the callback to Tasks
      )}
    </div>
  );
}

export default Dashboard;
