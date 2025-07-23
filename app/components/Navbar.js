"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Dropdown from './dropdown'
import Link from 'next/link'


const Navbar = () => {
  const router = useRouter()

  return (
    <div className='flex max-w-8xl container mx-auto items-center p-3 relative'>
      <div className="logo flex items-center">
        <Image
          src="/infinity.png"
          width={50}
          height={50}
          alt="logo"
        />

        <h1 className='font-sans font-bold text-xl text-gray-700'>An Infinite Thread </h1>
      </div>
      <ul className='flex space-x-10 text-gray-700 font-bold absolute right-60 hover:cursor-pointer'>
        <li className='md:block hidden'>
          <Link className='hover:text-orange-400' href="/">Home</Link>
        </li>
        <li className='md:block hidden'>
          <Link className='hover:text-orange-400' href="/about">About Us</Link>
        </li>
        <li className='md:block hidden'>
          <Dropdown />
        </li>
      </ul>

      <div className='absolute right-3'>
        <button onClick={() => router.push("/contactUs")} className='bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-br hover:cursor-pointer text-white px-4 py-2 rounded-2xl font-bold'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar

