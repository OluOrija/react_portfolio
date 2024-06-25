import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import PlayerControls from './PlayerControls';
import Playlist from './Playlist';

const Player = () => {
  const [songs] = useState([
    { id: 1, title: 'Song 1', url: 'songs/sample1.mp3' },
    { id: 2, title: 'Song 2', url: 'songs/sample2.mp3' },
    { id: 3, title: 'Song 3', url: 'songs/sample3.mp3' },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      playAudio();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleSongSelect = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleCanPlay = () => {
      if (isPlaying) {
        playAudio();
      }
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('canplay', handleCanPlay);

    return () => {
      audioElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].url;
    console.log('Current song URL:', songs[currentSongIndex].url);
  }, [currentSongIndex, songs]);

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Music Player
          </Typography>
          <audio ref={audioRef} />
          <PlayerControls
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isPlaying={isPlaying}
          />
          <Playlist songs={songs} onSongSelect={handleSongSelect} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Player;
