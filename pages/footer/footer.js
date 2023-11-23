import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className='flex-col w-full bg-blue-200 h-80'>
        <div className=" grid grid-cols-4 gap-4 w-full upper_row h-4/5 justify-evenly px-20 py-12">
          <div className="firstColumn flex-col">
          <Link href="/" >
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={120}
            height={25}
            priority
          />
        </Link>
        <p className="w-3/4">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
          </div>
          <div className="secondColumn flex flex-col justify-evenly"> 
            <h2>Useful links</h2>
          
            <Link href="#" className="text-white text-lg font-semibold">   About us </Link>
            <Link href="#" className="text-white text-lg font-semibold">   Events </Link>
            <Link href="#" className="text-white text-lg font-semibold">  Blogs </Link>
            <Link href="#" className="text-white text-lg font-semibold">   FAQ </Link>
          </div>
          <div className="thirdColumn flex flex-col bg-blue-400">
          <h2>Main Menu</h2>
            <Link href="#" className="text-white text-lg font-semibold">   Home </Link>
            <Link href="#" className="text-white text-lg font-semibold">   Offers </Link>
            <Link href="#" className="text-white text-lg font-semibold">  Menus </Link>
            <Link href="#" className="text-white text-lg font-semibold">   Reservation </Link>
          </div>
          <div className="forthColumn flex flex-col">
          <h2>Contact Us</h2>
            <Link href="#" className="text-white text-lg font-semibold">   example@gmail.com </Link>
            <Link href="#" className="text-white text-lg font-semibold">   +64 958 248 966 </Link>
            <Link href="#" className="text-white text-lg font-semibold">  Social Media </Link>
            
          </div>
        </div>
        <div className="lower_row flex w-full bg-pink-500 h-1/5 align-middle px-20">
          <div className="icons flex bg-blue-600 items-center">
          <Image
            src="/facebook.png"
            alt="Vercel Logo"
            className="dark:invert mr-2"
            width={25}
            height={25}
            priority
          />
          <Image
            src="/instagram.png"
            alt="Vercel Logo"
            className="dark:invert mr-2"
            width={25}
            height={25}
            priority
          />
         <Image
            src="/twitter.png"
            alt="Vercel Logo"
            className="dark:invert mr-2 bg-blue-700 p-"
            width={25}
            height={25}
            priority
          />
         <Image
            src="/youtube.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          />
       
          </div>
          <div className="copyrights flex items-center ml-16">
            Copyright 
            <Image
            
            src="/copyright.png"
            alt="Vercel Logo"
            className="dark:invert mx-2"
            width={25}
            height={25}
            priority
          /> 2023 Dscode | All rights reserved
          </div>
        </div>
      </div>
      {/* <h1>food-menu page</h1>;
      <Link href="/">
        return to home page 
      </Link>
      <Link href="#">
        contact 
      </Link>
      <Link href="../food-menu/food-menu">
        foodmenu page 
      </Link>
      <Link href="../offers/offers">
        offers page 
      </Link>
      <Link href="../posts/first-post">
        first-post page 
      </Link>
      <Link href="../services/services">
        services page 
      </Link> */}
    </>
  );
}
