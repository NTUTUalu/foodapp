import Link from 'next/link';
import Image from "next/image";

export default function Offers() {
    return (
        <>
              {/* import Image from "next/image"; */}
      <div className='flex justify-center '>
          <Image
            src="/UnderConstruction.png"
            alt="Vercel Logo"
            className="dark:invert max-md:w-24"
            width={400}
            height={25}
            priority
          />
          </div>
          <h2 className='text-center font-bold text-red-700 font-serif'>offers page under construction</h2>
       
        </>
      );
  }
  
  