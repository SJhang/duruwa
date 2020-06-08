import React, { useState, useEffect } from "react";
import { Grid, Typography, Link } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

import CustomSVG from "./common/CustomSVG";
import ActiveLink from "../Link";
import * as paths from '../paths';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3, 0),
    maxHeight: '10vh'
  },
  logo: {
    marginRight: theme.spacing(1)
  },
  selected: {}
}));

export default function Header({ hide }) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const classes = useStyles();

  const updateLng = (event, lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  }

  function renderItems() {
    const items = ['about', 'features', 'contact', 'download'];

    return items.map((item, idx) => {
      const text = t(`common:${item}`);

      return (
        <div className={'container pullDown'} key={idx}>
          <Link underline="none" className={classes.item}>{text}</Link>
        </div>
      );
    })
  }

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.wrapper}>
      <Grid item>
        <ActiveLink href={paths.index} underline="none">
          <Grid container alignItems="center">
            <CustomSVG name="eatstime"  viewBox="0 0 60 65" size={65} className={classes.logo}/>
            <Typography variant="h3">{t('common:company')}</Typography>
          </Grid>
        </ActiveLink>
      </Grid>
      {!hide &&
        <Grid item>
          <Grid container alignItems="center">
            {renderItems()}
          </Grid>
        </Grid>
      }
      <Grid item>
        <ToggleButtonGroup value={lang} exclusive onChange={updateLng} aria-label="language selection">
          <ToggleButton value="ko" label="Kor" aria-label="ko">Kor</ToggleButton>
          <ToggleButton value="en" label="Eng" aria-label="en">Eng</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}