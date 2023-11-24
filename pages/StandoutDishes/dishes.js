import Link from "next/link";
import Image from "next/image";
import b from '../contact-page/contact' 

export default function StandoutDishes() {
  return (
    <>
<div className="wrapper  flex flex-col w-full bg-blue-300 h-96">
    <div className="description flex flex-col bg-pink-200 h-1/3">
        <h1>SPECIAL DISHES</h1>
        <p>Standout Dishes From Our Menu</p>
        
    </div>
    <div className='right w-full grid grid-cols-4 gap-4 h-3/5'>
        <div className="card_1 bg-orange-200"><h5>food card</h5></div>
        <div className="card_2 bg-orange-200"><h5>food card</h5></div>
        <div className="card_3 bg-orange-200"><h5>food card</h5></div>
   

    </div>

</div>
    </>
  );
}
