import React from 'react';
import { Container, Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#1c1c1c",
    color: "#fff"
  },
  coolBackground: {
    background: 'linear-gradient(135deg, #fbc415, #c60178)',
    color: '#fff'
  }
}));


function CustomContainer({ children, color }) {
  const classes = useStyles(color);

  return (
    <Grid className={color ? classes.container : classes.coolBackground}>
      <Container>
        {children}
      </Container>
    </Grid>

  )
}

export default CustomContainer;