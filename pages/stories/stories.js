import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 
import Styles from './stories.module.css'

export default function Stories() {
  return (
    <>
<div className="wrapper  flex w-full  px-20 h-screen">
    <div className="left flex flex-col  w-1/2 mt-32">
        <h4 className="text-red-500 font-medium mb-6">OUR STORY & SERVICES</h4>
        <h1  className="text-slate-950 font-bold text-4xl w-4/6 mb-6">Our Culinary Journey And Services</h1>
        <p className="w-4/6 text-slate-500 font-normal mb-8">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
        <div className="buttons">
        <Link href="/contact-page/contact" className="">
        <button className="basis-1 flex  text-white text-base font-normal rounded-3xl bg-green-400 py-2 px-8">
        
          Explore
        </button>
      </Link>
      
     
        </div>
    </div>
    <div className='right w-1/2 grid grid-cols-2 gap-4'>
<div className="Catering flex justify-center items-center">
        <div className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center`} >
        <Image
            src="/catering.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <h3  className="font-bold text-base text-green-600 " >Catering</h3>
          <p className="text-center text-slate-500">Delight your guests with our flavors and  presentation</p>
        </div>
          
        </div>
<div className="Fast-Delivery  flex justify-center items-center">  
<div className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center`}>
<Image
            src="/delivery.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={55}
            height={45}
            priority
          />
          <h3  className="font-bold text-base text-green-600 " >FAST DELIVERY</h3>
          <p className="text-center text-slate-500">We deliver your order promptly to your door</p></div>
</div>
<div className="Online-Ordering flex justify-center items-center">   
<div className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center`}>
<Image
            src="/online.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <h3  className="font-bold text-base text-green-600 ">ONLINE ORDERING</h3>
          <p className="text-center text-slate-500">Delight your guests with our flavors and  presentation</p>
</div>
</div>
<div className="Gift-Cards  flex justify-center items-center"> 
<div className={`${Styles.CardShadow} bg-slate-50 w-3/4 h-4/6 rounded-xl flex flex-col p-6 justify-evenly items-center`}>
<Image
            src="/gift.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <h3 className="font-bold text-base text-green-600 ">GIFT CARDS</h3>
          <p className="text-center text-slate-500">Give the gift of exceptional dining with Food Gift Cards</p>
</div>
</div>
    </div>

</div>
    </>
  );
}
