import React from 'react';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

import ActiveLink from "../Link";
import * as paths from '../paths';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'black',
    color: '#fff',
    padding: theme.spacing(15, 0)
  },
}));

export default function footer() {
  const {t} = useTranslation();
  const classes = useStyles();

  return (
    <Grid className={classes.footer}>
      <Container>
        <Grid container alignItems="flex-start" justify="center" direction="column" spacing={10}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justify="space-between" spacing={10}>
              <Grid item>
                <ActiveLink color="textSecondary" href={paths.policy}>{t('common:policyTerms')}</ActiveLink>
              </Grid>
              <Grid item>
                <ActiveLink color="textSecondary" href={paths.policy}>{t('common:policyPrivacy')}</ActiveLink>
              </Grid>
              <Grid item>
                <ActiveLink color="textSecondary" href={paths.policy}>{t('common:policyLocation')}</ActiveLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.info}>
            주식회사 드루와컴퍼니 | 대표자 : 한범윤
            서울특별시 강남구 봉은사로 71길 17, 3층 (주)드루와컴퍼니
            사업자번호 : 325-88-01376
            통신판매업 : 제 2020-서울영등포-1267 호
            <br/>
            T. 070-8600-4812 | H. 010-3284-3784
            E. eatstime@duruwacompany.com
            © 2020 Copyright duruwacompany corp.
          </Grid>
        </Grid>
      </Container>
    </Grid>

  )
};