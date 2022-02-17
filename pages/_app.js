import Head from 'next/head';
import Layout from '../src/components/Layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Open Blog | Blog Posts By Anyone</title>
        <meta name="description" content="Blog posts by anyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
