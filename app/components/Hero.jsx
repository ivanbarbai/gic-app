"use client";
import React, { useContext } from "react";
import Image from 'next/image'
import {
  FlagIcon,
  CalendarDaysIcon,
  StarIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { BreakpointContext } from "../context/AppProvider";

const Hero = () => {
  const {width, breakpoint} = useContext(BreakpointContext);

  return (
    <section className="flex items-center w-full justify-center mb-14 px-10">
      <div className="flex flex-col w-full max-w-7xl sm:flex-row items-center py-10 ">
        <div className="flex flex-col items-center justify-center md:justify-start lg:items-start w-full text-center lg:text-left">
          <h1 className="text-5xl font-medium mb-2 text-blue-700 leading-none xl:max-w-3xl">
            Book Your Golf Adventure <br /> in Cabo
          </h1>
          <h1 className="text-md mb-8 font-light text-slate-600 leading-none xl:max-w-3xl">
            Cabo&apos;s Golfing Hotspots: Unveiling the Extravagance
          </h1>
          <button className="rounded-full mb-12 bg-green-500 text-white border-white border py-3 px-5 text-sm">
            Discover our courses
          </button>
          <div className="flex items-center justify-center lg:items-start lg:justify-start mt-12 w-full">
            <div className="flex flex-col mr-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-auto mb-8 mr-0 lg:mr-10">
                <FlagIcon width={28} className="text-green-400 lg:mr-3 mr-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-green-400">
                    7 Trusted
                  </span>
                  <span className="text-sm text-regular text-zinc-500">
                    Golf Courses
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-auto mb-8 mr-0 lg:mr-10">
                <CalendarDaysIcon
                  width={28}
                  className="text-green-400 lg:mr-3 mr-0"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-green-400">
                    Real-Time Avaibility
                  </span>
                  <span className="text-sm text-regular text-zinc-500">
                    Schedule your slot
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-auto mb-8 mr-0 lg:mr-10">
                <StarIcon width={28} className="text-green-400 sm:mr-3 mr-0" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-green-400">
                    High Quality
                  </span>
                  <span className="text-sm text-regular text-zinc-500">
                    Best Golfing Courses
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start w-auto mb-8 mr-0 lg:mr-10">
                <BookOpenIcon
                  width={28}
                  className="text-green-400 lg:mr-3 mr-0"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-green-400">
                    Tee Time Booking
                  </span>
                  <span className="text-sm text-regular text-zinc-500">
                    Book your tee time online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {width > breakpoint ? (
          <div className="flex items-center justify-center sm:justify-end w-full text-center">
            <Image
              className="max-w-[420px] rounded-lg"
              src="https://res.cloudinary.com/droimgtqi/image/upload/v1695878153/gic/golf-header_jquc1y.png"
              alt=""
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Hero;
