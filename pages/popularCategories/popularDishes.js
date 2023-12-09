import Link from "next/link";
import Image from "next/image";
import b from "../contact-page/contact";
import Styles from './populardishes.module.css'

export default function PopularDishes() {
  return (
    <>
      <div className="wrapper  flex flex-col w-full h-96 px-20 text-center max-md:px-10  max-md:my-40">
        <div className="description flex flex-col   h-1/3 text-slate-500">
          <h1 className="text-red-500 font-medium">CUSTOMER FAVORITES</h1>
          <p className="text-4xl font-bold text-slate-700">
            Popular Categories
          </p>
        </div>
        <div className="right w-full  grid  grid-cols-4 gap-4 h-3/5  max-md:">
          <div className="card_1 flex justify-center  items-center ">
        
          <div className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full `}>
          <div className=" mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-2">
              <Image
                src="/burger.png"
                alt="Vercel Logo"
                className="dark:invert rounded-full"
                width={120}
                height={30}
                priority
              />
            </div>
            <h5 className="font-bold">food card</h5>
            <p>(86 dishes)</p>
          </div>
           
          </div>
          <div className="card_1 flex justify-center items-center ">
        
        <div className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full`}>
        <div className=" mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-2">
            <Image
              src="/sandwich.png"
              alt="Vercel Logo"
              className="dark:invert rounded-full"
              width={120}
              height={30}
              priority
            />
          </div>
          <h5 className="font-bold">food card</h5>
          <p>(86 dishes)</p>
        </div>
         
        </div><div className="card_1 flex justify-center items-center">
        
        <div className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full`}>
        <div className=" mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-2">
            <Image
              src="/icecream.png"
              alt="Vercel Logo"
              className="dark:invert rounded-full"
              width={120}
              height={30}
              priority
            />
          </div>
          <h5 className="font-bold">food card</h5>
          <p>(86 dishes)</p>
        </div>
         
        </div><div className="card_1 flex justify-center items-center">
        
        <div className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full`}>
        <div className=" mr-2  bg-blue-100 flex justify-items-center items-center rounded-full p-1">
            <Image
              src="/juice.png"
              alt="Vercel Logo"
              className="dark:invert rounded-full "
              width={120}
              height={10}
              priority
            />
          </div>
          <h5 className="font-bold">food card</h5>
          <p>(86 dishes)</p>
        </div>
         
        </div>
        </div>
      </div>
    </>
  );
}
