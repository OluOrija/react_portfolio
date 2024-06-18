import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Chat = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').orderBy('createdAt').onSnapshot((snapshot) => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await firestore.collection('messages').add({
        text: newMessage,
        createdAt: new Date(),
        uid: user.uid,
        email: user.email
      });
      setNewMessage('');
    }
  };

  return (
    <Container>
      <h2>Chat</h2>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.text} secondary={message.email} />
          </ListItem>
        ))}
      </List>
      <TextField
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
        fullWidth
      />
      <Button onClick={handleSendMessage} variant="contained" color="primary">
        Send
      </Button>
    </Container>
  );
};

export default Chat;
