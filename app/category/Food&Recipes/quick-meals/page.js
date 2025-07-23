"use client";
import React from 'react';

import Image from "next/image";

export default function QuickMeals() {
  const meals = [
    {
      title: "Peanut Butter Banana Sandwich",
      desc: "Bread, peanut butter, banana slices. Toast or eat fresh!",
      img: "/images/sandwich.jpg",
    },
    {
      title: "Instant Noodles with Veggies",
      desc: "Boil noodles, add veggies, cook for 2-3 mins.",
      img: "/images/noodles.jpg",
    },
    {
      title: "Fruit & Oats Bowl",
      desc: "Microwave oats, top with fruits & honey.",
      img: "/images/oats.jpg",
    },
    {
      title: "Mug Omelette",
      desc: "Mix eggs in a mug, microwave for 1-2 mins.",
      img: "/images/egg.jpg",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        🥗 Quick Meals for Students
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Simple, fast, and budget-friendly meals to fuel your study days.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={meal.img}
              alt={meal.title}
              width={400}
              height={300}
              className="w-full h-80 object-cover"
              unoptimized={true}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{meal.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{meal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
