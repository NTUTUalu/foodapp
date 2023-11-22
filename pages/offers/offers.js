import Link from 'next/link';

export default function Offers() {
    return (
        <>
          <h1>offers page</h1>
          <Link href="/">return to home page <br/>   </Link>
      <Link href="#">contact  <br/> </Link>
      <Link href='../food-menu/food-menu'>foodmenu page <br/></Link>
      <Link href='../offers/offers'>offers page <br/> </Link>
      <Link href='../posts/first-post'>first-post page <br/>   </Link>
      <Link href="../services/services">services page   <br/></Link>
        </>
      );
  }
  
  