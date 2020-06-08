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
    padding: theme.spacing(3, 0)
  },
  download: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`
  },
  en: {
    color: '#FFF'
  }
}));

export default function Header({ hide }) {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const classes = useStyles();

  const updateLng = (event, lng) => {
    setLang(lng);

    return i18n.changeLanguage(lng);
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
        <ActiveLink href={paths.index}>
          <CustomSVG name="eatstime"  viewBox="0 0 60 65" size={65}/>
          <Typography display="inline" variant="h3">{t('common:company')}</Typography>
        </ActiveLink>
      </Grid>
      {!hide &&
        <Grid item className={classes.itemsGroup}>
          <Grid container alignItems="center">
            {renderItems()}
          </Grid>
        </Grid>
      }
      <Grid item>
        <ToggleButtonGroup value={lang} exclusive onChange={updateLng}>
          <ToggleButton value="ko">Kor</ToggleButton>
          <ToggleButton value="en">Eng</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}