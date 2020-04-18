import Head from 'next/head';
import Container from '../components/common/container';
import Layout from '../components/common/layout';
import Header from '../components/common/header';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Duruwa</title>
        </Head>
        <Header/>
        <Container>
          
        </Container>
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     props: props
//   }
// }