import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import React from 'react';

import { Slide, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

/**
 * Snack bar handles different messages and shows them in a colored strip on the page. Accepts severity and message.
 * @param {Function} setSnack snack setter
 * @param {Object} snack Message showed in a strip
 * @returns {Component} Snackbar
 */
export function SnackBarHandler({ setSnack, snack }) {
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={24} ref={ref} variant='filled' {...props} />;
  });

  const closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack((prev) => {
      return { ...prev, open: false };
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={snack.open}
      autoHideDuration={5000}
      onClose={closeSnackBar}
      TransitionComponent={Slide}
    >
      <Alert onClose={closeSnackBar} severity={snack.state}>
        {snack.msg}
      </Alert>
    </Snackbar>
  );
}

SnackBarHandler.propTypes = {
  setSnack: PropTypes.func,
  snack: PropTypes.shape({
    msg: PropTypes.string,
    open: PropTypes.bool,
    state: PropTypes.string,
  }),
};
