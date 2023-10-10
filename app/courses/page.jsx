'use client';
import React from 'react'
import Course from '../components/Course'
import data from '../api/data.json'

const Courses = () => {
    const courses = data.cabo.courses;

  return (
    <main>
        <section className='px-10 flex items-center w-full justify-center flex-col'>
        <div className="box-border w-full flex flex-col sm:flex-row justify-center items-center max-w-7xl">
        {courses.map((featured, index) => (
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
    </main>
  )
}

export default Courses