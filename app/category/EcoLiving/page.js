
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Zero Waste Home Setup: A Simple Guide',
    slug: 'zero-waste-home',
    summary: "Learn how to start a zero waste home with simple steps. Reduce waste, save money, and protect the planet.",
    date: 'July 15, 2025',
    image: '/images/zero-waste-home.jpg',
  },
];

const page = () => {
  return (
    <div>
      <main className="bg-gray-50 min-h-screen m-1">
        <section className="text-center py-14 bg-white shadow-sm">
          <h1 className="text-5xl font-bold text-gray-800">Eco Living</h1>
          <p className="text-gray-500 mt-3 text-lg">Discover articles, tutorials, and resources</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mt-1">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.summary}</p>
                <Link href={`/category/EcoLiving/${post.slug}`}>
                  <button className="mt-4 text-blue-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default page