import Link from "next/link";
import Image from "next/image"; 
import Head from "next/head";

export default function Services() {
  
  return (
    <>
    
     <div>
      <Head>
      <title>this is my services page</title>
      <meta property="og:description" content="this is the services page to inform users about our services"/>
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
          <h2 className='text-center font-bold text-red-700 font-serif'>services page under construction</h2>
       
    </>
  );
}
