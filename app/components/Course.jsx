'use client';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';



const Course = ({thumbnail, priceRange, rate, name, slug}) => {

    return (
        <>
            <Link href={slug} className="w-full m-0 mb-8 sm:m-4 last:mr-0 first:ml-0 max-w-sm sm:max-w-lg">
                <div style={{ backgroundImage: `url(${thumbnail})` }} className='rounded-xl h-52 w-full bg-cover bg-no-repeat '>
                    <div className='flex flex-col justify-center items-center p-4 w-full h-full rounded-xl from-slate-800 bg-gradient-to-t via-transparent'>
                        <div className="flex w-full h-full justify-end items-start">
                        </div>
                        <div className="flex w-full h-full flex-col justify-end items-start">
                            {rate && <div className="flex justify-center items-center mb-1">
                                <StarIcon className='text-yellow-500 text-sm h-4 mr-1' />
                                <p className='text-sm text-white font-semibold'>{rate}</p>
                            </div>}
                            <h2 className="text-sm text-white font-regular tracking-wide">{name}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default Course;