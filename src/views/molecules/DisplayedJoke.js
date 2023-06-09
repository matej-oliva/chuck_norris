import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { currentJoke } from '../../features/joke';
import { Text } from '../atoms';
import React from 'react';

export function DisplayedJoke() {
  const joke = useSelector(currentJoke);
  return (
    <>
      {joke.value && (
        <Box
          sx={{
            background: (theme) => theme.palette.gradient.radial,
            border: '1px black solid',
            borderRadius: '3px',
            p: '10px',
            mt: '25%',
            width: '75%',
            mx: 'auto',
            textAlign: 'justify',
          }}
        >
          <Text variant='body1' component='p' id='loadedJoke' alt='A text with chuck norris joke'>
            {joke.value}
          </Text>
          <Box sx={{ textAlign: 'end' }}>
            {joke.categories && joke.categories.length > 0 && (
              <Text variant='body1' component='p'>
                Categories: {joke.categories.map((category) => category)}
              </Text>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
