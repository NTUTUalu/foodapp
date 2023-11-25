import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className='flex-col w-full h-80'>
        <div className=" grid grid-cols-4 gap-4 w-full upper_row h-4/5 justify-evenly px-20 py-12">
          <div className="firstColumn flex-col">
          <Link href="/" >
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert mb-4 "
            width={100}
            height={25}
            priority
          />
        </Link>
        <p className="w-3/4 text-slate-500 font-medium">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
          </div>
          <div className="secondColumn flex flex-col  text-slate-500 font-medium text-base"> 
            <h2 className="text-lg font-bold text-slate-600">Useful links</h2>
          
            <Link href="#" className=" ">   About us </Link>
            <Link href="#" className="  ">   Events </Link>
            <Link href="#" className="  ">  Blogs </Link>
            <Link href="#" className="  ">   FAQ </Link>
          </div>
          <div className="thirdColumn flex flex-col text-slate-500 text-base font-medium">
          <h2 className="font-bold text-lg text-slate-600" >Main Menu</h2>
            <Link href="#" className="">   Home </Link>
            <Link href="#" className="">   Offers </Link>
            <Link href="#" className="">  Menus </Link>
            <Link href="#" className="">   Reservation </Link>
          </div>
          <div className="forthColumn flex flex-col text-slate-500 text-base font-medium">
          <h2 className="font-bold text-lg text-slate-600">Contact Us</h2>
            <Link href="#" className="">   example@gmail.com </Link>
            <Link href="#" className="">+64 958 248 966 </Link>
            <Link href="#" className="">  Social Media </Link>
            
          </div>
        </div>
        <div className="lower_row flex w-full  h-2/6 align-middle px-20">
          <div className="icons flex items-center">
            <div className="mr-2 justify-items-center items-center rounded-full p-1.5 bg-blue-100 ">
            <Image
            src="/facebook.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
            </div>
         <div className="mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-2">
         <Image
            src="/instagram.png"
            alt="Vercel Logo"
            className="dark:invert "
            width={30}
            height={30}
            priority
          />
         </div>
         <div className="mr-2 justify-items-center items-center rounded-full p-2 bg-blue-100">
         <Image
            src="/twitter.png"
            alt="Vercel Logo"
            className="dark:invert  p-"
            width={30}
            height={30}
            priority
          />
         </div>
       <div className="mr-2  justify-items-center items-center rounded-full p-2 bg-blue-100">
       <Image
            src="/youtube.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={30}
            height={30}
            priority
          />
       </div>
          </div>
          <div className="copyrights flex items-center ml-16 text-sm text-slate-600">
            Copyright 
            <Image
            
            src="/copyright.png"
            alt="Vercel Logo"
            className="dark:invert mx-1"
            width={17}
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
