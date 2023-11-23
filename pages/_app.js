import "@/styles/globals.css";
import Navigation from "./navigation/navigation";
import Link from 'next/link';
import Footer from './footer/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
