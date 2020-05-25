import Head from "next/head";
import Container from "../components/common/container";
import Layout from "../components/common/layout";

import CoverImage from '../components/Intro/CoverImage';

export default function Index() {
  return (
    <>
      <Head>
        <title>이츠타임</title>
      </Head>

      <Layout>
        <Container>
          
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
