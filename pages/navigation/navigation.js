import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 
import { useRouter } from "next/router";

export default function Navigation() {

  const router = useRouter();
  
  return (
    <>
      <div className="flex  justify-between items-center py-6 px-20 w-full max-md:px-5 max-sm:px-">
        <Link href="/" >
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-24"
            width={120}
            height={25}
            priority
          />
        </Link>
        <div className="flex  justify-between items-center w-1/4  max-md:w-fit max-sm:hidden">
          <Link href="/" className={` text-lg font-semibold max-md:mr-3 ${router.pathname === "/" ? "text-green-400" : "text-Slate-600"}`} >   Home </Link>
          <div>
            <Link href="../food-menu/food-menu" className={`flex text-lg font-semibold max-md:mr-3 ${router.pathname === "/food-menu/food-menu" ? "text-green-400" : "text-Slate-600"}`}>Menu  <Image
            src="/downArrow.png"
            alt="Vercel Logo"
            className="dark:invert max-md:mr-2"
            width={25}
            height={25}
            priority
          /></Link>
          </div>
          <div className="">
            <Link href="../services/services" className={`flex text-lg font-semibold max-md:mr-3 ${router.pathname === "/services/services" ? "text-green-400" : "text-Slate-600"}`}>Services  <Image
            src="/downArrow.png"
            alt="Vercel Logo"
            className="dark:invert max-md:mr-2"
            width={25}
            height={25}
            priority
          /></Link>
          </div>
          <Link href="../offers/offers" className={` text-lg font-semibold max-md:mr-3 ${router.pathname === "/offers/offers" ? "text-green-400" : "text-Slate-600"}`}>Offers </Link>
        </div>
        <div className="flex w-fit justify-evenly items-center max-sm:hidden">
      <Link href="/">
        <Image
          src="/search.png"
          alt="Vercel Logo"
          className="dark:invert mr-6 max-md:mr-3"
          width={25}
          height={24}
          priority
        />
      </Link>
      <Link href="/">
        <Image
          src="/cart3.png"
          alt="Vercel Logo"
          className="dark:invert mr-6 max-md:mr-3"
          width={25}
          height={24}
          priority
        />
      </Link>
      <Link href="#" className="">
              <button className="basis-1 flex  text-white tracking-wide text-base font-medium rounded-3xl bg-green-400 py-2 px-4 items-center">
              <Image
          src="/phone2.png"
          alt="Vercel Logo"
          className="dark:invert mr-3 max-md:w-15"
          width={18}
          height={24}
          priority
        />
                Contact
              </button>
            </Link>
           
      </div>
      <Link href="/">
        <Image
          src="/menu3.png"
          alt="Vercel Logo"
          className="dark:invert mr-6 max-md:mr-3 hidden max-sm:flex"
          width={40}
          height={24}
          priority
        />
      </Link>
      </div>
     
    </>
  );
}
