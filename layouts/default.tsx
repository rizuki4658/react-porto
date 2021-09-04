import { NextPage } from 'next';
import Navigation from '~/components/navigation';
import Footer from '~/components/footer';
import Head from 'next/head';
const Layout: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>React Porto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
