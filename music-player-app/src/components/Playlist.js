import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Playlist = ({ songs, onSongSelect }) => {
  return (
    <List>
      {songs.map((song, index) => (
        <StyledListItem key={song.id} onClick={() => onSongSelect(index)}>
          <ListItemText primary={song.title} />
        </StyledListItem>
      ))}
    </List>
  );
};

export default Playlist;
