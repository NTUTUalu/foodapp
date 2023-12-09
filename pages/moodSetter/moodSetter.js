import Link from "next/link";
import Image from "next/image";
import b from "../contact-page/contact";
import Styles from "./moodsetter.module.css";

export default function MoodSetter() {
  return (
    <>
      <div className="px-20 max-md:px-10  ">
        <div className="wrapper flex w-full h-screen max-md:h-fit">
          <div className="left flex flex-col  w-1/2 mt-24 max-md:mt-12">
            <h1 className="text-5xl font-bold w-5/6 leading-tight max-md:text-3xl max-md:w-5/6">
              Dive into Delights <br />
              Of Delectable <span className="text-green-500 max-md:text-">Food</span>
            </h1>
            <p className="text-slate-500 font-medium w-4/6 mt-8 mb-7 max-md:w-5/6">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftmanship
            </p>
            <div className="buttons flex">
              <Link href="#" className="">
                <button className="basis-1 flex  text-white tracking-wide text-base font-semibold rounded-3xl bg-green-400 py-2 px-8  ">
                  Order Now
                </button>
              </Link>
              <Link href="#" className="">
                <button className="basis-1 flex  text-slate-500 text-base font-normal py-2 px-8">
                  Watch Video
                  <Image
                    src="/play.png"
                    alt="Vercel Logo"
                    className={`${Styles.shadow} styles.darkInvert ml-2 bg-slate-100 rounded-full p-1 flex justify-self-center`}
                    width={25}
                    height={25}
                    priority
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="right w-1/2 ">
            <Image
              src="/mood.png"
              alt="Vercel Logo"
              className={` styles.darkInvert ml-2  mt-5 p-1 flex justify-self-center`}
              width={510}
              height={25}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
