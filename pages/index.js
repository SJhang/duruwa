import React from "react";
import Head from "next/head";
import {useTranslation} from "react-i18next";

import Header from "../src/components/Header";
import IntroPage from "../src/components/Intro";
import About from "../src/components/About";
import Features from "../src/components/Features";
import AboutUs from "../src/components/ContactUs";
import Download from "../src/components/Download";
import Footer from "../src/components/Footer";

import '../src/styles/index.css';
import CustomContainer from "../src/components/common/Container";

export default function Index() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:company')}</title>

        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <meta name="description" content="eatstime"/>
        <link href="https://use.fontawesome.com/releases/v5.2.0/css/svg-with-js.css" rel="stylesheet"/>
      </Head>

      <CustomContainer>
        <Header />
        <IntroPage/>
      </CustomContainer>

      <About />
      <Features />
      <AboutUs />
      <Download />
      <Footer />
    </>
  );
}