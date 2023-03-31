import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import React from 'react';

export function Text({ children, white, ...props }) {
  return (
    <Typography
      color={white ? 'white' : 'initial'}
      sx={{
        my: '10px',
        mx: '15px',
      }}
      className='font'
      {...props}
    >
      {children}
    </Typography>
  );
}

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  white: PropTypes.bool,
};
