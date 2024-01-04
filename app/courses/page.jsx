"use client";
import React from "react";
import Course from "../components/Course";
import data from "../api/data.json";
import Image from "next/image";

const Courses = () => {
  const courses = data.cabo.courses;

  return (
    <main>
      <section className="px-10 flex items-center sm:items-start w-full justify-center flex-col">
        <div style={{ backgroundImage: `url(https://res.cloudinary.com/droimgtqi/image/upload/v1696978241/gic/gic-banner-min_mf0bwr.png)` }} className="w-full h-[540px] text-center sm:text-left sm:h-80 rounded-xl bg-cover bg-center bg-no-repeat">
          <div className="w-full flex-col flex p-8 justify-end items-start rounded-xl h-full from-green-600 bg-gradient-to-t via-transparent">
            <h1 className="text-5xl text-white mb-8 sm:mb-2">Welcome to Cabo</h1>
            <p className="text-sm text-white">Where golfers' dreams become reality amidst breathtaking natural landscapes</p>
          </div>
        </div>
        <div className="courses flex flex-col w-full my-6">
          <p className="text-slate-400 text-md">Pick your Course</p>
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
        </div>
      </section>
    </main>
  );
};

export default Courses;
