import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { schedulePost } from '../services/api';

const PostScheduler = () => {
  const [postContent, setPostContent] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSchedulePost = async () => {
    try {
      const postDetails = { content: postContent, time: scheduledTime };
      const response = await schedulePost(postDetails);
      console.log('Post scheduled successfully:', response);
      // Clear the form
      setPostContent('');
      setScheduledTime('');
    } catch (error) {
      console.error('Error scheduling post:', error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4">Post Scheduler</Typography>
      <TextField
        label="Post Content"
        multiline
        rows={4}
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Scheduled Time"
        type="datetime-local"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleSchedulePost}>
        Schedule Post
      </Button>
    </Box>
  );
};

export default PostScheduler;
