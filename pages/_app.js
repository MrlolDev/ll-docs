import "../styles/css/globals.css";
import SideNav from "../components/sideNav";

export default function Lolinck({ Component, pageProps }) {
  return (
    <>
      <SideNav />
      <Component {...pageProps} />
    </>
  );
}
