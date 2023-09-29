import Image from 'next/image'
import Hero from './components/Hero'
import FeaturedCourses from './components/FeaturedCourses'

export default function Home() {
  return (
    <main className="box-border">
      <Hero />
      <FeaturedCourses />
    </main>
  )
}
