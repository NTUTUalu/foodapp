
import FirstPost from './contact-page/contact'

import Link from 'next/link';
import MoodSetter from './moodSetter/moodSetter'
import Populardishes from './popularCategories/popularDishes'
import StandoutDishes from "./StandoutDishes/dishes";
import Testimonies from "./Testimonies/testimonies";
import Stories from './stories/stories'
import Head from "next/head"


export default function Home() {
  return (
    <>
    <div>
      <Head>
      <title>this is my home page</title>
      <meta property="og:description" content="this is the home page to inform users about our products and mission"/>
      </Head>
      
    </div>
     <MoodSetter/>
      <Populardishes/>
      <StandoutDishes/>
<Testimonies/>
<Stories/>
  
    {/* this is our root page */}
    </>
  )
}
