import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Duruwa</title>
        </Head>
        <Container>
          hello
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}