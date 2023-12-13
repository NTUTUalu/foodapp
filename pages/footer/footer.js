import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className='flex-col w-full h-80  max-sm:h-72'>
        <div className=" grid grid-cols-4 gap-4 w-full upper_row h-4/5 justify-evenly px-20 py-12 max-md:px-10 max-sm:grid-cols-1  max-sm:px-1 max-sm:h-fit max-sm:pb-0 max-sm:bg-green-200">
          <div className="firstColumn flex-col max-sm:justify-items-center max-sm:text-center">
          <Link href="/" className=" max-sm:w-full max-sm:flex max-sm:justify-center">
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert mb-4 max-md:w-20 max-sm:justify-self-center"
            width={100}
            height={25}
            priority
          />
        </Link>
        <p className="w-3/4 text-slate-500 font-medium max-sm:w-full">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
          </div>
          <div className="secondColumn flex flex-col  text-slate-500 font-medium text-base max-sm:hidden"> 
            <h2 className="text-lg font-bold text-slate-600">Useful links</h2>
          
            <Link href="#" className=" ">   About us </Link>
            <Link href="#" className="  ">   Events </Link>
            <Link href="#" className="  ">  Blogs </Link>
            <Link href="#" className="  ">   FAQ </Link>
          </div>
          <div className="thirdColumn flex flex-col text-slate-500 text-base font-medium max-sm:hidden">
          <h2 className="font-bold text-lg text-slate-600" >Main Menu</h2>
            <Link href="#" className="">   Home </Link>
            <Link href="#" className="">   Offers </Link>
            <Link href="#" className="">  Menus </Link>
            <Link href="#" className="">   Reservation </Link>
          </div>
          <div className="forthColumn flex flex-col text-slate-500 text-base font-medium max-sm:w-full  max-sm:text-center">
          <h2 className="font-bold text-lg text-slate-600 ">Contact Us</h2>
            <Link href="#" className="">   example@gmail.com </Link>
            <Link href="#" className="">+64 958 248 966 </Link>
            <Link href="#" className="max-sm:hidden">  Social Media </Link>
            
          </div>
        </div>
        <div className="lower_row flex w-full  h-2/6 align-middle px-20 max-md:px-10 max-sm:flex-col max-sm:items-center  max-sm:justify-evenly max-sm:bg-green-300">
          <div className="icons flex items-center">
            <div className="mr-2 justify-items-center items-center rounded-full p-1.5 bg-blue-100 max-md:p-1">
            <Image
            src="/facebook.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-8"
            width={35}
            height={35}
            priority
          />
            </div>
         <div className="mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-2 max-md:p-1.5">
         <Image
            src="/instagram.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-7"
            width={30}
            height={30}
            priority
          />
         </div>
         <div className="mr-2 justify-items-center items-center rounded-full p-2 bg-blue-100 max-md:p-1">
         <Image
            src="/twitter.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-7"
            width={30}
            height={30}
            priority
          />
         </div>
       <div className="mr-2  justify-items-center items-center rounded-full p-2 bg-blue-100 max-md:p-1">
       <Image
            src="/youtube.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-8"
            width={30}
            height={30}
            priority
          />
       </div>
          </div>
          <div className="copyrights flex items-center ml-16 text-sm text-slate-600 max-sm:w-full max-sm:m-0 max-sm:justify-center">
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
