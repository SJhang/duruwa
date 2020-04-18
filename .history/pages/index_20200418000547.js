import Head from 'next/head';
import Container from '../components/common/container'
import Layout from '../components/common/layout';
import Meta from '../components/common/meta';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Duruwa</title>
          <Meta/>
        </Head>
        <Container>
          hello
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