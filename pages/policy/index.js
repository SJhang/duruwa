import React, {useState, useEffect} from "react";
import Head from "next/head";
import {Container, Paper, AppBar, Tabs, Tab, Box} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";

import Header from "../../src/components/Header";
import TermsPolicy from "../../src/components/Policies/terms";
import TermsPolicyUser from "../../src/components/Policies/UserTerms";
import LocationPolicy from "../../src/components/Policies/location";
import PrivacyPolicy from "../../src/components/Policies/privacy";
import ScrollTop from "../../src/components/common/ScrollTop";
import {useRouter} from "next/router";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          {children}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    background: theme.palette.background.default
  },
  root: {
    margin: theme.spacing(5, 0),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Index() {
  const { t } = useTranslation();
  const classes = useStyles();
  const [ index, setIndex ] = useState(0);

  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e, newVal) => {
    setIndex(newVal);
  };

  const renderPanel = () => {
    let comp = null;
    switch (index){
      case 0:
        comp = <TermsPolicy/>;
        break;
      case 1:
        comp = <TermsPolicyUser />;
        break;
      case 2:
        comp = <LocationPolicy/>;
        break;
      case 3:
        comp = <PrivacyPolicy/>;
        break;
      default:
        return comp;
    }

    return <TabPanel value={index} index={index}>{comp}</TabPanel>
  }

  return (
    <Container className={classes.container}>
      <Head>
        <title>이츠타임</title>

        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="description" content="eatstime"/>
        <link href="https://use.fontawesome.com/releases/v5.2.0/css/svg-with-js.css" rel="stylesheet"/>
      </Head>

      <Header hide />

      <Paper className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={index}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label={t('common:policyTerms')}/>
            <Tab label={t('common:policyTermsUser')}/>
            <Tab label={t('common:policyLocation')}/>
            <Tab label={t('common:policyPrivacy')}/>
          </Tabs>
        </AppBar>
        {renderPanel()}
      </Paper>

      <ScrollTop/>
    </Container>
  );
}