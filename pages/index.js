
import FirstPost from '../pages/contact-page/contact'

import Link from 'next/link';
import MoodSetter from './moodSetter/moodSetter'
import Populardishes from './popularCategories/popularDishes'
import StandoutDishes from "./StandoutDishes/dishes";
import Testimonies from "./Testimonies/testimonies";
import Stories from './stories/stories'

export default function Home() {
  return (
    <>
     <MoodSetter/>
      <Populardishes/>
      <StandoutDishes/>
<Testimonies/>
<Stories/>
  
    {/* this is our root page */}
    </>
  )
}
