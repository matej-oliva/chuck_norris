import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';
import { AppTitle, TalkingChuck } from './views/atoms';
import { SnackBarHandler } from './views/atoms/SnackBarHandler';
import { DisplayedJoke } from './views/molecules';
import { Footer, SearchForm } from './views/organisms';

function App() {
  const [snack, setSnack] = useState({
    state: '',
    msg: '',
    open: false,
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mx: 'auto',
          width: '90%',
          maxWidth: '600px',
          mb: '60px',
        }}
      >
        <TalkingChuck />
        <AppTitle />
        <SearchForm setSnack={setSnack} />
        <DisplayedJoke />
      </Box>
      <Footer />
      <SnackBarHandler snack={snack} setSnack={setSnack} />
    </Box>
  );
}

export default App;
