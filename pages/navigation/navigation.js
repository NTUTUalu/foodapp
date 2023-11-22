import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function Navigation() {
  return (
    <>
      <div className="flex bg-green-100 justify-between items-center p-6 w-full">
        <Link href="/" >
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={120}
            height={25}
            priority
          />
        </Link>
        <div className="flex bg-blue-700 justify-between items-center w-1/4">
          <Link href="/" className="text-white text-lg font-semibold">   Home </Link>
          <div>
            <Link href="../food-menu/food-menu" className="flex text-white text-lg font-semibold">Menu  <Image
            src="/downArrow.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          /></Link>
          </div>
          <div className="">
            <Link href="../services/services" className="flex text-white text-lg font-semibold">Services  <Image
            src="/downArrow.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          /></Link>
          </div>
          <Link href="../offers/offers" className=" text-white text-lg font-semibold">Offers </Link>
        </div>
        <div className="flex w-1/6 justify-evenly items-center bg-blue-700">
      <Link href="/">
        <Image
          src="/search.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={25}
          height={24}
          priority
        />
      </Link>
      <Link href="/">
        <Image
          src="/cart.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={25}
          height={24}
          priority
        />
      </Link>
      <Link href="/contact-page/contact" className="">
        <button className="basis-1 flex  text-white text-base font-normal">
          <Image
            src="/phone.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={25}
            height={25}
            priority
          />
          Contact
        </button>
      </Link>
      </div>
      </div>
     
    </>
  );
}
