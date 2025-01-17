import React from 'react'
import { useState, useRef } from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { motion as Motion } from 'framer-motion'
import { BsColumnsGap } from 'react-icons/bs'

export default function Course() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: 'all',
      active: true
    },
    {
      id: 2,
      title: 'management',
      active: false
    },
    {
      id: 3,
      title: 'programming',
      active: false
    },
    {
      id: 4,
      title: 'data science',
      active: false
    },
    {
      id: 5,
      title: 'design',
      active: false
    }
  ])
  const [activeCategory, setActiveCategory] = useState('all')

  const courses = [
    {
      image: '/wallpaper (1).jpeg',
      category: 'data science'
    },
    {
      image: '/wallpaper (1).jpg',
      category: 'management'
    },
    {
      image: '/wallpaper (2).jpg',
      category: 'programming'
    },
    {
      image: '/wallpaper (1).jpeg',
      category: 'design'
    },
    {
      image: '/wallpaper (1).jpg',
      category: 'all'
    }
  ]
  const [courseDependent, setCourseDependent] = useState(courses)
  const [grid, setGrid] = useState(true)
  return (
    <>
      <Header />
      <section className="course-page">
        <div className="category-container">
          {categories.map((category) => (
            <span
              key={category.id}
              className={`category-span ${category.active ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category.title)
                setCourseDependent(
                  category.title == 'all'
                    ? courses
                    : courses.filter(
                        (course) => course.category == category.title
                      )
                )
                setCategories(
                  categories.map((categ) =>
                    categ.id === category.id
                      ? { ...categ, active: true }
                      : { ...categ, active: false }
                  )
                )
              }}
            >
              {category.title}
            </span>
          ))}
        </div>
        <BsColumnsGap
          onClick={() => {
            setGrid(!grid)
          }}
          className="grid-icon"
        />
        <Motion.div layout className={`${grid === false ? 'column' : 'grid'}`}>
          {courseDependent.map((course) => (
            <Motion.div
              key={course.category}
              className={` ${grid === false ? 'column-div' : 'course-card'}`}
            >
              <Image
                src={`${course.image}`}
                alt="course image"
                layout="fill"
                className="course-image"
              />
            </Motion.div>
          ))}
        </Motion.div>
      </section>
    </>
  )
}
