import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function Stories() {
  return (
    <>
<div className="wrapper  flex w-full bg-blue-500 h-screen">
    <div className="left flex flex-col bg-pink-500 w-1/2">
        <h4>OUR STORY & SERVICES</h4>
        <h1>Our Culinary Journey And Services</h1>
        <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
        <div className="buttons">
        <Link href="/contact-page/contact" className="">
        <button className="basis-1 flex  text-white text-base font-normal bg-green-500 px-12">
        
          Explore
        </button>
      </Link>
      
     
        </div>
    </div>
    <div className='right w-1/2 grid grid-cols-2 gap-4'>
<div className="Catering bg-orange-400">
        
          <Image
            src="/play.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
          <h3>Catering</h3>
          <p>Delight your guests with our flavors and  presentation</p>
        </div>
<div className="Fast-Delivery bg-orange-400">   <Image
            src="/play.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
          <h3>FAST DELIVERY</h3>
          <p>We deliver your order promptly to your door</p></div>
<div className="Online-Ordering bg-orange-400">   <Image
            src="/play.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
          <h3>ONLINE ORDERING</h3>
          <p>Delight your guests with our flavors and  presentation</p></div>
<div className="Gift-Cards bg-orange-400">   <Image
            src="/play.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={35}
            height={35}
            priority
          />
          <h3>GIFT CARDS</h3>
          <p>Give the gift of exceptional dining with Foodi Gift Cards</p></div>
    </div>

</div>
    </>
  );
}
