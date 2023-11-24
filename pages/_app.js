import "@/styles/globals.css";
import Navigation from "./navigation/navigation";
import Link from 'next/link';
import Footer from './footer/footer'


export default function App({ Component, pageProps }) {
  return (
    <><div className="flex flex-col justify-between bg-green-500 min-h-screen ">

 
      <Navigation />
     
      <Component {...pageProps} />
      <Footer/>
      </div>
    </>
  );
}
