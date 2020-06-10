import React, { useState, useEffect } from "react";
import { Grid, Typography, Link, MenuItem, Menu, Fade, IconButton } from '@material-ui/core';
// import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import { isMobile, isAndroid } from 'react-device-detect';

import CustomSVG from "./common/CustomSVG";
import ActiveLink from "../Link";
import * as paths from '../paths';

const useStyles = makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(3, 0),
    // maxHeight: '10vh'
  },
  logo: {
    marginRight: theme.spacing(1)
  },
  selected: {}
}));

export default function Header(props) {
  const { t, i18n } = useTranslation();
  // const [lang, setLang] = useState('en');
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  // const updateLng = (event, lng) => {
  //   i18n.changeLanguage(lng);
  //   setLang(lng);
  // }

  function renderItems() {
    const items = ['about', 'features', 'contact', 'download'];

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    function handleClose() {
      setAnchorEl(null);
    }

    if (isMobile) {
      return (
        <>
          {/*<IconButton>*/}
          {/*  <CustomSVG name="menu"/>*/}
          {/*</IconButton>*/}
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {items.map((item, i) => {
              const text = t(`common:${item}`);

              return (
                <MenuItem onClick={handleClose}>text</MenuItem>
              )
            })}
          </Menu>
        </>
      )
    }

    return items.map((item, idx) => {
      const text = t(`common:${item}`);

      return (
        <div className={'container pullDown'} key={idx}>
          <Link underline="none" className={classes.item}>{text}</Link>
        </div>
      );
    })
  }

  // function renderLanguageSelection() {
  //   return (
  //     <Grid item>
  //       <ToggleButtonGroup value={lang} exclusive onChange={updateLng} aria-label="language selection">
  //         <ToggleButton value="ko" label="Kor" aria-label="ko">Kor</ToggleButton>
  //         <ToggleButton value="en" label="Eng" aria-label="en">Eng</ToggleButton>
  //       </ToggleButtonGroup>
  //     </Grid>
  //   )
  // }

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.wrapper} id="back-to-top-anchor">
      <Grid item xs={5} lg={5}>
        <Grid container justify="flex-start" alignItems="center" spacing={2}>
          <Grid item xs={3} md={1}>
            <CustomSVG name="eatstime" />
          </Grid>
          <Grid item md={5}>
            <ActiveLink href={paths.index} underline="none">
              <Typography variant="h4">{t('common:company')}</Typography>
            </ActiveLink>
          </Grid>

        </Grid>

      </Grid>
      {
        !props.hide &&
        <Grid item xs={7} lg={7}>
          <Grid container alignItems="center">
            {renderItems()}
          </Grid>
        </Grid>
      }
    </Grid>
  );
}