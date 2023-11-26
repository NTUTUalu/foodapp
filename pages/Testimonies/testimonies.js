import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function Testimonies() {
  return (
    <>
<div className="wrapper  flex w-full  h-screen px-20">

    <div className="left flex flex-col  w-1/2">
        <h1>Testimonies</h1>
        <p>What Our Customers Say About Us </p>
        <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        <div className="customer feedback">
      <div className="images">

      </div>
      <div className="right-text flex flex-col">
    <h1>Customer Feedback</h1>
    <div className="flex">
    <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          />
          <h6>4.9</h6>
          <p>(18.6k Reviews)</p>
    </div>
      </div>
  
     
        </div>
    </div>
    <div className="left flex flex-col  w-1/2 mt-32">
          <h4 className="text-red-500 font-medium mb-6">
            TESTIMONIES
          </h4>
          <h1 className="text-slate-950 font-bold text-4xl w-4/6 mb-6">What Our Customers Say About Us
          </h1>
          <p className="w-4/6 text-slate-500 font-normal mb-8">
          “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
          <div className="buttons">
            <Link href="/contact-page/contact" className="">
              <button className="basis-1 flex  text-white text-base font-normal rounded-3xl bg-green-400 py-2 px-8">
                Explore
              </button>
            </Link>
          </div>
        </div>

</div>
    </>
  );
}
