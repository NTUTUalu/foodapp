import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function MoodSetter() {
  return (
    <>
<div className="wrapper  flex w-full bg-blue-500 h-screen">
    <div className="left flex flex-col bg-pink-500">
        <h1>Dive into Delights Of Delectable Food</h1>
        <p>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftmanship</p>
        <div className="buttons">
        <Link href="/contact-page/contact" className="">
        <button className="basis-1 flex  text-white text-base font-normal">
        
          Order Now
        </button>
      </Link>
      <Link href="#" className="">
        <button className="basis-1 flex  text-white text-base font-normal">
          Watch Video
        </button>
      </Link>
      <Link href="/contact-page/contact" className="">
        <button className="basis-1 flex  text-white text-base font-normal">
          <Image
            src="/play.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          />
        
        </button>
      </Link>
        </div>
    </div>
    <div className='right w-3/5'>
<h5>insert image here</h5>
    </div>

</div>
    </>
  );
}
