import React, { useState } from "react";
import { Carousel, Radio } from "antd";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Styles from "./dishes.module.css";
import Link from "next/link";
import Image from "next/image";

export default function StandoutDishes() {
  return (
    <div className="wrapper flex flex-col w-full h-screen px-20 mt-24 pt-10 bg-green-500 max-md:p-10 max-md:h-fit max-md:mt-0 max-sm:px-1">
      <div className="description flex flex-col mb-7 h-fit">
        <h1 className="text-slate-100 text-lg font-medium mb-5 tracking-wide">
          SPECIAL DISHES
        </h1>
        <p className="text-5xl w-2/6 font-semibold text-red-600 max-md:text-3xl max-sm:text-2xl max-sm:w-full">
          Standout Dishes From Our Menu
        </p>
      </div>
      <div className="right flex flex-col w-full h-full max-sm:h-fit">
        <Carousel dotPosition="bottom" className="flex h-full max-sm:h-64">
          <div className="h-96 w-full flex justify-center max-sm:h-full">
            <div className=" right w-full  grid justify-items-center grid-cols-3  gap-6 h-5/6 max-md:gap-x-3">
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish1.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Fattoush salad</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        24.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center ">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish_3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Mutton chips</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        44.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">lemon fish irk</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        30.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 w-full flex justify-center max-sm:h-full">
            <div className=" right w-full  grid justify-items-center grid-cols-3 gap-6 h-5/6 ">
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish1.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Fattoush salad</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        24.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish_3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Mutton chips</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        44.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">lemon fish irk</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        30.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 w-full flex justify-center max-sm:h-full">
            <div className=" right w-full  grid justify-items-center grid-cols-3 gap-6 h-5/6 ">
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish1.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Fattoush salad</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        24.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish_3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">Mutton chips</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        44.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_1 flex w-full justify-center  items-center">
                <div
                  className={`${Styles.CardShadow} bg-slate-50 w-5/6 h-full rounded-xl flex flex-col p-6 justify-evenly items-center max-md:w-full max-sm:p-2`}
                >
                  <div className=" mr-2 flex justify-items-center items-center  p-2">
                    <Image
                      src="/dish3.png"
                      alt="Vercel Logo"
                      className="dark:invert rounded-full"
                      width={200}
                      height={30}
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-start w-full">
                    <h5 className="font-bold text-lg">lemon fish irk</h5>
                    <p>Description of the item</p>
                    <div className="flex justify-between mt-1">
                      <h1 className="text-slate-500 font-medium text-base">
                        <span className="text-red-400 font-bold text-base mr-1">
                          $
                        </span>
                        30.00
                      </h1>
                      <div className="flex text-slate-500 ">
                        {" "}
                        <Image
                          src="/rating.png"
                          alt="Vercel Logo"
                          className="dark:invert rounded-full mr-1"
                          width={20}
                          height={30}
                          priority
                        />
                        <span className="font-semibold">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add more Carousel items as needed */}
        </Carousel>
      </div>
    </div>
  );
}
