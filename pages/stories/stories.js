import Link from "next/link";
import Image from "next/image";
import b from "../contact-page/contact";
import Styles from "./stories.module.css";

export default function Stories() {
  return (
    <>
      <div className="wrapper  flex w-full  px-20 h-screen max-md:px-10 max-md:h-fit max-md:mb-20 max-sm:flex-col max-sm:p-1 ">
        <div className="left flex flex-col  w-1/2 mt-32 max-md:mt-8 max-sm:w-full max-sm:mb-16">
          <h4 className="text-red-500 font-medium mb-6">
            OUR STORY & SERVICES
          </h4>
          <h1 className="text-slate-950 font-bold text-4xl w-4/6 mb-6 max-md:text-3xl max-sm:text-2xl">
            Our Culinary Journey And Services
          </h1>
          <p className="w-4/6 text-slate-500 font-normal mb-8 max-md:w-5/6 max-sm:w-full">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <div className="buttons">
            <Link href="#" className="">
              <button className="basis-1 flex  text-white text-base font-normal rounded-3xl bg-green-400 py-2 px-8">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="right w-1/2 grid grid-cols-2 gap-0 max-md:w-4/6 max-md:gap-x-4 max-md:gap-y-10 max-sm:w-full max-sm:h-96 max-sm:px-10">
          <div className="Catering flex justify-center items-center  max-md:items-end ">
            <div
              className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-md:h-full max-md:${Styles.CardShadow2} max-md:p-1`}
            >
              <Image
                src="/catering.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={40}
                height={40}
                priority
              />
              <h3 className="font-bold text-base text-green-600 ">CATERING</h3>
              <p className="text-center text-slate-500">
                Delight your guests with our flavors and presentation
              </p>
            </div>
          </div>
          <div className="Fast-Delivery  flex justify-center items-center  max-md:items-end">
            <div
              className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-md:h-full max-md:p-1`}
            >
              <Image
                src="/delivery.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={55}
                height={45}
                priority
              />
              <h3 className="font-bold text-base text-green-600 ">
                FAST DELIVERY
              </h3>
              <p className="text-center text-slate-500">
                We deliver your order promptly to your door
              </p>
            </div>
          </div>
          <div className="Online-Ordering flex justify-center items-center  max-md:items-start">
            <div
              className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-md:h-full max-md:p-1`}
            >
              <Image
                src="/online.png"
                alt="Vercel Logo"
                className="dark:invert max-md:mb-1"
                width={40}
                height={40}
                priority
              />
              <h3 className="font-bold text-center leading-5 text-base text-green-600 ">
                ONLINE ORDERING
              </h3>
              <p className="text-center text-slate-500">
                Delight your guests with our flavors and presentation
              </p>
            </div>
          </div>
          <div className="Gift-Cards  flex justify-center items-center  max-md:items-start">
            <div
              className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-md:h-full max-md:p-1 `}
            >
              <Image
                src="/gift.png"
                alt="Vercel Logo"
                className="dark:invert"
                width={40}
                height={40}
                priority
              />
              <h3 className="font-bold text-base text-green-600 ">
                GIFT CARDS
              </h3>
              <p className="text-center text-slate-500">
                Give the gift of exceptional dining with Food Gift Cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
