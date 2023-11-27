import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function Testimonies() {
  return (
    <>
<div className="wrapper  flex w-full  h-screen px-20">

    <div className="left flex flex-col  w-1/2 mt-20  justify-center">
        
     
   
     
 
    <div className="flex justify-center   ">
    <Image
            src="/chef.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={570}
            height={25}
            priority
          />
        
    </div>
   
  
     
     
    </div>
    <div className="left flex flex-col   w-1/2 mt-32">
          <h4 className="text-red-500 font-medium mb-6">
            TESTIMONIALS
          </h4>
          <h1 className="text-slate-950 font-bold text-5xl w-5/6 mb-8">What Our Customers Say About Us
          </h1>
          <p className="w-4/6 text-slate-500 font-normal mb-8">
          “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”
          </p>
          <div className="customerFeedback flex">
            <div className="Images  flex items-end">
            <Image
            src="/people.png"
            alt="Vercel Logo"
            className="dark:invert mr-2 h-10 "
            width={100}
            height={10}
            priority
          />
            </div>
            <div className="Rating flex flex-col">
<h1 className="font-bold">Customer Feedback</h1>
<div className="flex mt-1">
   <Image
            src="/rating.png"
            alt="Vercel Logo"
            className="dark:invert mr-2"
            width={20}
            height={10}
            priority
          /><span className="font-semibold mr-1">4.9</span>
          (18.6k Reviews)
    
</div>
            </div>
          </div>
        </div>

</div>
    </>
  );
}
