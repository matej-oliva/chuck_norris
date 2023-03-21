import { Box } from '@mui/material';
import { Text } from '../atoms';
import React from 'react';

export function Footer() {
  return (
    <Box
      sx={{
        mt: 'auto',
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        p: '15px',
        flexShrink: '0',
        bgcolor: '#031E20',
      }}
    >
      <Text variant='h4' white>
        Matěj Oliva, 2023
      </Text>
    </Box>
  );
}
