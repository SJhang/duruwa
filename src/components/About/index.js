import React from 'react';
import { Grid, Container } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import CustomContainer from "../common/Container";

const useStyles = makeStyles(theme => ({
  wrapper: {
    background: "black",
    color: "#fff"
  }
}));

function About() {
  const classes = useStyles();

  return (
    <CustomContainer color="black">
    </CustomContainer>
  )
}

export default About;
