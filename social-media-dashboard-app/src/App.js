import React, { useState } from 'react';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import PostScheduler from './components/PostScheduler';
import Analytics from './components/Analytics';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const renderPage = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'postScheduler':
        return <PostScheduler />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar onSelect={setSelectedPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderPage()}
      </Box>
    </Box>
  );
};

export default App;
