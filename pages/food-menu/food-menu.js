import Link from 'next/link';
import Image from "next/image";
import Head from "next/head"

export default function Foodmenu() {
    return (
        <>
    
     <div>
      <Head>
      <title>Food Menu page</title>
      <meta property="og:description" content="this is the menu page to inform users about different cuisines we have offer"/>
      </Head>
      
    </div>
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
          <h2 className='text-center font-bold text-red-700 font-serif'>food menu page under construction</h2>
       
        </>
      );
  }
  
  