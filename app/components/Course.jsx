'use client';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';



const Course = (props) => {

    return (
        <>
            <Link href={props.slug} className="m-4 md:m-8">
                <div style={{ backgroundImage: `url(${props.thumbnail})` }} className='w-full rounded-md h-56 bg-cover bg-no-repeat'>
                    <div className='flex flex-col justify-center items-center p-4 w-full h-full rounded-md from-slate-950 from-5% bg-gradient-to-t via-transparent'>
                        <div className="flex w-full h-full justify-end items-start">
                            <p className='text-xs text-slate-900 font-semibold p-1 px-2 bg-white shadow-lg'>{props.priceRange}</p>
                        </div>
                        <div className="flex w-full h-full flex-col justify-end items-start">
                            {props.rate && <div className="flex justify-center items-center mb-1">
                                <StarIcon className='text-yellow-500 text-sm h-4 mr-1' />
                                <p className='text-sm text-white font-semibold'>{props.rate}</p>
                            </div>}
                            <h2 className="text-md text-white font-semibold tracking-wide">{props.name}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default Course;