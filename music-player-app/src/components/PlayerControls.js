import React from 'react';
import { IconButton, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { styled } from '@mui/material/styles';

const ControlsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const PlayerControls = ({ onPlayPause, onNext, onPrevious, isPlaying }) => {
  return (
    <ControlsContainer>
      <IconButton onClick={onPrevious} color="primary">
        <SkipPreviousIcon />
      </IconButton>
      <IconButton onClick={onPlayPause} color="primary">
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <IconButton onClick={onNext} color="primary">
        <SkipNextIcon />
      </IconButton>
    </ControlsContainer>
  );
};

export default PlayerControls;
