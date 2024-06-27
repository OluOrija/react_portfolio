import React from 'react';
import { Drawer, List, ListItem, ListItemText, Toolbar, Divider } from '@mui/material';

const Sidebar = ({ onSelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => onSelect('dashboard')}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => onSelect('postScheduler')}>
          <ListItemText primary="Post Scheduler" />
        </ListItem>
        <ListItem button onClick={() => onSelect('analytics')}>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
