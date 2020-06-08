import React from 'react';
import { Container, Grid } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#1c1c1c",
    color: "#fff"
  },
  coolBackground: {

    background: 'linear-gradient(45deg, #db1372 30%, #e73c7e 90%)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
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