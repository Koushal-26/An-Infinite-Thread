"use client"
import React from 'react'
import Link from 'next/link'

const Footer = () => {


  return (
    <div>
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold">An Infinite Thread.</h2>
            <p className="text-sm mt-2 text-gray-400">
              A space where endless ideas <br /> take shape and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links.</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home.</Link></li>
              <li><Link href="/about" className="hover:text-white">About.</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms.</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy.</Link></li>
              <li><Link href="/contactUs" className="hover:text-white">Contact Us.</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Blog Categories.</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/category/Coding&WebDev" className="hover:text-white">Coding & Web Dev.</Link></li>
              <li><Link href="/category/Health&Fitness" className="hover:text-white">Health & Fitness.</Link></li>
              <li><Link href="/category/Tech&Gadgets" className="hover:text-white">Tech & Gadgets.</Link></li>
              <li><Link href="/category/SelfImprovement" className="hover:text-white">Self Improvement.</Link></li>
              <li><Link href="/category/Education&StudyTips" className="hover:text-white">Education/Study Tips.</Link></li>
              <li><Link href="/category/Travel&Adventure" className="hover:text-white">Travel & Adventure.</Link></li>
              <li><Link href="/category/Gaming&Entertainment" className="hover:text-white">Gaming & Entertainment.</Link></li>
              <li><Link href="/category/EcoLiving" className="hover:text-white">Eco Living.</Link></li>
              <li><Link href="/category/Food&Recipes" className="hover:text-white">Food & Recipes.</Link></li>
            </ul>
          </div>


        </div>


        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} An Infinite Thread. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
