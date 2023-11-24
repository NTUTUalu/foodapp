import "@/styles/globals.css";
import Navigation from "./navigation/navigation";
import Link from 'next/link';
import Footer from './footer/footer'
import MoodSetter from './moodSetter/moodSetter'
import Populardishes from './popularCategories/popularDishes'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <MoodSetter/>
      <Populardishes/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
