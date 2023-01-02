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
        <section className="bg-white">
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
            className="mySwiper inner-landpage-section"
          >
            <SwiperSlide className="my-swiper-slide">
              <Image
                layout="fill"
                alt="swiper slide image"
                src="/wallpaper (1).jpeg"
                className="swiper-slide-img"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="my-swiper-slide">
              <Image
                layout="fill"
                alt="swiper slide image"
                src="/wallpaper (1).jpg"
                className="swiper-slide-img"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="my-swiper-slide">
              <Image
                layout="fill"
                alt="swiper slide image"
                src="/wallpaper (2).jpg"
                className="swiper-slide-img"
                priority
              />
            </SwiperSlide>
          </Swiper>
          <div className="landpage-text-container">
            <div className="text-container">
              <h1>
                experience interactive learning. your gateway to success every
                lesson counts
              </h1>
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
