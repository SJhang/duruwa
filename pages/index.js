import Head from "next/head";
import Container from "../components/common/container";
import Layout from "../components/common/layout";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

import LandingPage from '../components/LandingPage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Duruwa</title>
      </Head>

      <Layout>
        <Container>
          <LandingPage/>
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: props
//   }
// }
