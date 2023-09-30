'use client';
import React from 'react'
import Course from './Course'
import data from '../api/data.json'
import axios from 'axios'

const FeaturedCourses = () => {
    const courses = data.cabo.courses;
    const featured = courses.slice(0, 3);

  return (
    <section className='px-20 sm:px-0 flex items-center w-full justify-center flex-col'>
        <p className='text-green-400 mb-2 font-semibold text-2xl'>Featured Courses</p>
        <div className="box-border w-full flex flex-col sm:flex-row justify-center items-center max-w-7xl">
        {featured.map((featured, index) => (
            <Course 
                thumbnail={featured.media?.default}
                rate={featured.aggregateRating?.ratingValue}
                key={index}
                name={featured.name}
                slug={featured.url}
                priceRange={featured.priceRange}
             />
        ))}
        </div>
    </section>
  )
}

export default FeaturedCourses