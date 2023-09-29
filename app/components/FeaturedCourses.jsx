'use client';
import React from 'react'
import Course from './Course'
import data from '../api/data.json'
import axios from 'axios'

const FeaturedCourses = () => {
    const courses = data.cabo.courses;
    const featured = courses.slice(0, 3);

  return (
    <div className='container flex justify-center'>
        <div className="flex justify-center items-center">
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
    </div>
  )
}

export default FeaturedCourses