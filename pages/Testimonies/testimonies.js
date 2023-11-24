import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function Testimonies() {
  return (
    <>
<div className="wrapper  flex w-full bg-blue-500 h-screen">
<div className='right w-1/2'>
<h5>insert image here</h5>
    </div>
    <div className="left flex flex-col bg-pink-500 w-1/2">
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
  

</div>
    </>
  );
}
