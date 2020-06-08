import React  from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';

const styles = () =>
  createStyles({
    '@global html, body': {
      height: `calc(100% - 40px)`,
    },
    '@global #root': {
      height: '100%',
    },
  });

export const MainWrapper = withStyles(styles)(({ children }) => (
  <>{children}</>
));
