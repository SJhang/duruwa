import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

}));

function IntroPage() {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper}>
      Intro
    </Grid>
  );
}

export default IntroPage;