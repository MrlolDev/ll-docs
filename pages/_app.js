import '../styles/css/globals.css';
import SideNav from '../components/sideNav';
import Head from 'next/head';
export default function Lolinck({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/05bb22a118.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <SideNav />
      <Component {...pageProps} />
    </>
  );
}
