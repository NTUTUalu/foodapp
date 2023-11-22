import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <>
      <div className="flex bg-green-500 justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/foodlogo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={25}
            priority
          />
        </Link>
        <div className="flex">
          <Link href="../services/services">Home </Link>
          <div>
            <Link href="../services/services">Menu </Link>
          </div>
          <div>
            <Link href="../services/services">Services </Link>
          </div>
          <Link href="../services/services">Offers </Link>
        </div>
        <div className="flex">
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
      <Link href="../services/services" className="">
        <button className="basis-1 flex bg-orange-100">
          <Image
            src="/downArrow.png"
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
