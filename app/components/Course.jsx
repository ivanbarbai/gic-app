'use client';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';



const Course = ({thumbnail, priceRange, rate, name, slug}) => {

    return (
        <>
            <Link href={slug} className="m-5 max-w-xl w-full">
                <div style={{ backgroundImage: `url(${thumbnail})` }} className='w-full rounded-xl h-56 w-56 bg-cover bg-no-repeat'>
                    <div className='flex flex-col justify-center items-center p-4 w-full h-full rounded-xl from-green-500 bg-gradient-to-t via-transparent'>
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