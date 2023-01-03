import Head from 'next/head'
import { BsSearch } from 'react-icons/bs'
import Layout from '@/components/layout'
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper'

const slides = [
  '/wallpaper (1).jpeg',
  '/wallpaper (1).jpg',
  '/wallpaper (2).jpg'
]

export default function Test() {
  return (
    <Layout>
      <Head>
        <title>Product-X</title>
        <meta name="description" content="An online learning platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="relative h-screen w-full">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            modules={[Autoplay, Pagination]}
            className="h-full w-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide}>
                <Image
                  layout="fill"
                  alt="swiper slide image"
                  className="swiper-slide-img"
                  src={slide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute z-10 top-0 w-full h-full bg-black bg-opacity-70">
            <div className="flex w-full h-full justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-white text-4xl leading-relaxed text-center capitalize w-1/2">
                  experience interactive learning. your gateway to success every
                  lesson counts
                </h2>
                <div className="search-container">
                  <input
                    type="search"
                    name=""
                    id=""
                    placeholder="search"
                    className="search-input"
                  />
                  <span className="search-btn-container">
                    <BsSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="course-listing">
          <div className="course-list-card"></div>
          <div className="course-list-card"></div>
          <div className="course-list-card"></div>
          <div className="course-list-card"></div>
          <div className="course-list-card"></div>
          <div className="course-list-card"></div>
        </section>
      </main>
    </Layout>
  )
}
