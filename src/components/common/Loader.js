import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, withStyles, darken } from '@material-ui/core/styles';

const styles = (theme) =>
  createStyles({
    full: {
      display: 'flex',
      height: '100%',
    },
    inline: {
      display: 'inline-flex',
    },
    block: {
      display: 'block',
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    loadingBar: {
      display: 'inline-block',
      borderRadius: '50%',
      animation: 'loading 1s ease-in-out infinite',
      marginLeft: 4,
      marginRight: 4,

      '&:nth-child(1)': {
        backgroundColor: theme.custom.palette.grey3,
        animationDelay: '0s',
      },
      '&:nth-child(2)': {
        backgroundColor: theme.custom.palette.grey3,
        animationDelay: '0.09s',
      },
      '&:nth-child(3)': {
        backgroundColor: theme.custom.palette.grey3,
        animationDelay: '0.18s',
      },
      '&:nth-child(4)': {
        backgroundColor: theme.custom.palette.grey3,
        animationDelay: '0.27s',
      },
    },
    '@global @keyframes loading': {
      '0%': { transform: 'scale(1)' },
      '20%': {
        transform: 'scale(1.1, 1.2)',
        backgroundColor: darken(theme.custom.palette.grey3, 0.1),
      },
      '40%': { transform: 'scale(1)' },
    },
  });

const Standard = ({ classes, display, width, height }) => {
  const wrapperStyle = { width, height };
  const barStyle = { width: (width - 32) / 4, height: (width - 32) / 4 };

  return (
    <div className={classes[display]}>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <div className={classes.wrapper} style={wrapperStyle}>
            <div style={barStyle} className={classes.loadingBar} />
            <div style={barStyle} className={classes.loadingBar} />
            <div style={barStyle} className={classes.loadingBar} />
            <div style={barStyle} className={classes.loadingBar} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Standard.defaultProps = {
  display: 'full',
  width: 80,
  height: 80,
};

export default withStyles(styles)(Standard);
