import { Box } from '@mui/material';
import React from 'react';

export function TalkingChuck() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        p: '25px',
      }}
    >
      <div className='bubble bubble-bottom-right'>Lemme tell you a story...</div>
      <Box
        sx={{ borderRadius: '50%' }}
        component='img'
        height='146px'
        width='146px'
        src='/img/chuck.png'
        alt='chuck norris head image'
      ></Box>
    </Box>
  );
}
