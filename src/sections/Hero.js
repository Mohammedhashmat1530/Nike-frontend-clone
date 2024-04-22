import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from "../assets/images";
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section id='hero' className='w-full flex xl:flex-row flex-col justify-center max-container gap-10 min-h-screen'>

      <div className='relative  xl:w-2/5 flex flex-col justify-center items-start w-full'>
        <p className='mt-8 text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-4 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>

        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        <div className='flex justify-start items-start w-full mt-20 flex-wrap gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoe1}
          alt='img'
          width={610}
          height={502}
          className='object-contain relative z-10' />
      </div>
    </section>
  )
}

export default Hero
