import "@/styles/globals.css";
import Navigation from "./navigation/navigation";
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
