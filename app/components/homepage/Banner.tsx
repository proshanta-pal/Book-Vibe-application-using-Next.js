import React from 'react'
import BannerImg from '../../assets/hero_img.jpg'
import Image from 'next/image'

export default function Banner() {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-slate-200 rounded-3xl py-10 mx-5 lg:mx-0'>
            <div className='space-y-8 mx-10 flex flex-col items-center lg:items-start'>
                <h1 className='font-bold text-5xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-success text-white font-medium'>View the List</button>
            </div>

            <div className='mx-10 mt-10 lg:mt-0'>
                <Image className='rounded-3xl' src={BannerImg} alt='Banner Image' />
            </div>
        </div>
    </section>
  )
}
