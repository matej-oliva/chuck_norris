import PropTypes from 'prop-types';
import { Button, Tooltip } from '@mui/material';
import React from 'react';

export function StandardButton({ tooltip, func, icon, children }) {
  return (
    <Tooltip title={tooltip}>
      <Button
        className='font'
        color='secondary'
        variant='outlined'
        aria-label='Get a new random joke button'
        type='button'
        onClick={func}
        endIcon={icon}
        sx={{
          background: (theme) => theme.palette.gradient.radial,
        }}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

StandardButton.propTypes = {
  func: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.string,
  tooltip: PropTypes.string,
};
