import Head from 'next/head'
import Layout from '@/components/layout'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
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
            <div className="flex w-full h-full justify-center items-center px-2">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-white text-3xl sm:text-4xl flex flex-col gap-y-2 text-center capitalize">
                  <span>Experience Interactive Learning</span>
                  <span>Your Gateway to Success</span>
                  <span>Every Lesson Counts</span>
                </h2>
                <div className="mt-4">
                  <div className="mt-1 flex rounded-md shadow-sm w-full">
                    <div className="relative flex items-stretch flex-grow focus-within:z-10">
                      <input
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full text:xl sm:text-2xl rounded-none rounded-l-md pl-4 border-gray-300"
                        placeholder="Search"
                      />
                    </div>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center bg-primary-500 space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 hover:bg-primary-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <SearchIcon
                        className="h-5 w-10 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
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
