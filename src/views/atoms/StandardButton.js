import PropTypes from 'prop-types';
import { Button, Tooltip } from '@mui/material';
import React from 'react';

export function StandardButton({ tooltip, func, icon, children, style }) {
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
        sx={[
          {
            background: (theme) => theme.palette.gradient.radial,
          },
          style,
        ]}
      >
        {children}
      </Button>
    </Tooltip>
  );
}

StandardButton.propTypes = {
  children: PropTypes.string,
  func: PropTypes.func,
  icon: PropTypes.element,
  style: PropTypes.object,
  tooltip: PropTypes.string,
};
