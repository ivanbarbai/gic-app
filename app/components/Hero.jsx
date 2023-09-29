'use client';
import { ShieldCheckIcon, PlusIcon, FlagIcon, CalendarDaysIcon, StarIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const Hero = () => {
    return (
        <section className="bg-big mb-14">
            <div className='flex items-center py-10 px-20'>
                <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start w-full h-96 text-center sm:text-left">
                    <h1 className="text-5xl font-medium mb-2 text-blue-600 leading-none xl:max-w-3xl">Book Your Golf Adventure <br /> in Cabo</h1>
                    <h1 className="text-md mb-6 font-light text-slate-500 leading-none xl:max-w-3xl">Cabo's Golfing Hotspots: Unveiling the Extravagance</h1>
                    <button className='rounded-full mb-12 bg-green-500 text-white border-white border py-3 px-5 text-sm'>Discover our courses</button>
                    <div className="flex items-start mt-12 w-full">
                        <div className="flex flex-col">
                            <div className="flex w-auto mb-5 mr-10">
                                <FlagIcon width={28} className="text-green-600 mr-3" />
                                <div className="flex flex-col">
                                    <span className="text-md font-bold text-green-600">7 Trusted</span>
                                    <span className="text-sm text-regular text-zinc-600">Golf Courses</span>
                                </div>
                            </div>
                            <div className="flex mr-10 w-auto">
                                <CalendarDaysIcon width={28} className="text-green-600 mr-3" />
                                <div className="flex flex-col">
                                    <span className="text-md font-bold text-green-600">Real-Time Avaibility</span>
                                    <span className="text-sm text-regular text-zinc-600">Schedule your slot</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="flex w-auto mb-5">
                                <StarIcon width={28} className="text-green-600 mr-3" />
                                <div className="flex flex-col">
                                    <span className="text-md font-bold text-green-600">High Quality</span>
                                    <span className="text-sm text-regular text-zinc-600">Best Golfing Courses</span>
                                </div>
                            </div>
                            <div className="flex w-auto mb-5">
                                <BookOpenIcon width={28} className="text-green-600 mr-3" />
                                <div className="flex flex-col">
                                    <span className="text-md font-bold text-green-600">Tee Time Booking</span>
                                    <span className="text-sm text-regular text-zinc-600">Book your tee time online in just a few clicks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center sm:justify-end w-full text-center">
                    <img className="max-w-[420px] rounded-lg" src="https://res.cloudinary.com/droimgtqi/image/upload/v1695878153/gic/golf-header_jquc1y.png" alt="" />
                </div>
            </div>
        </section>
    )

}

export default Hero;