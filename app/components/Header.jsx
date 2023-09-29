"use client";
import React, { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Header = () => {  

  return (
    <Popover className="container mx-auto px-10 sm:px-20 flex items-center py-2 h-24 box-border">
      <Link href="/">
        <img className='max-w-[36px]' src="https://res.cloudinary.com/droimgtqi/image/upload/v1695887962/gic/Group_7_1_z2gvyw.png" alt="" />    
  </Link>
      <div className='grow'>
        <div className="text-zinc-500  hidden sm:flex items-center justify-center gap-4 text-sm text-slate-800 md:gap-8">
          <Link className='hover:text-green-500 duration-200 ease-in-out' href="/courses">Courses</Link>
          <Link className='hover:text-green-500 duration-200 ease-in-out' href="/about">About us</Link>
          <Link className='hover:text-green-500 duration-200 ease-in-out' href="/faqs">FAQs</Link>
          <Link className='hover:text-green-500 duration-200 ease-in-out' href="/contact">Contact</Link>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className='sr-only'>Open</span>
          <Bars3Icon className='h-6 w-6' aria-hidden="true" />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition mx-3 md:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Link href="/">
                <img className='max-w-[36px]' src="https://res.cloudinary.com/droimgtqi/image/upload/v1695887962/gic/Group_7_1_z2gvyw.png" alt="" />    
                </Link>
                <div className="">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                    <Link href="/courses">Courses</Link>
                    <Link href="/about">About us</Link>
                    <Link href="/faqs">FAQs</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;