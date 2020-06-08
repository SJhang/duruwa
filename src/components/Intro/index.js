import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '90vh'
  },
  download: {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(3, 0)
  },
  image: {
    maxHeight: '60vh',
    transform: 'rotate(10deg)'
  }
}));

function IntroPage() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.container}>
      <Grid item xs={8}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>{t('intro:headline')}</Typography>
        <Typography variant="h4" gutterBottom>{t('intro:subHeadline')}</Typography>
        <Button
          className={classes.download}
          variant="contained"
          color="secondary"
          size="large"
        >
          {t('intro:downloadButton')}
        </Button>
      </Grid>
      <Grid item>
        <img className={classes.image} src="/assets/images/Screen.png"/>
      </Grid>
    </Grid>
  );
}

export default IntroPage;