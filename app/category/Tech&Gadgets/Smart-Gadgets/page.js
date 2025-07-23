import React from 'react'
import Head from 'next/head'

const page = () => {
 return (
  <div>
   <Head>
    <title>Top Smart Gadgets to Watch in 2025 | Tech & Gadgets</title>
    <meta
     name="description"
     content="Discover the top trending smart gadgets of 2025, from AI-powered wearables to futuristic home devices. Stay ahead with the latest in tech!"
    />
   </Head>

   <main className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
    <h1 className="text-5xl font-bold mb-6 text-black text-center">
     Top Smart Gadgets to Watch in 2025
    </h1>
    <p className="text-lg mb-6">
     Technology keeps evolving, and 2025 is no exception. From AI-driven wearables
     to intelligent home devices, this year's gadgets are smarter, faster, and
     more helpful than ever before.
    </p>
    <hr />
    

    <section className="space-y-6">
     <div>
      <h2 className="text-2xl font-semibold m-2">Smart Glasses 2.0</h2>
      <img
          src="/images/Pixel-6-Glass.jpg"
          alt="Pixel 6 Glass"
          className="w-full h-80 object-fit rounded-xl mb-6"
        />
      <p>
       Lightweight AR glasses from Apple and Meta project calls, maps, and messages
       into your view. They're stylish, battery-efficient, and redefine hands-free tech.
      </p>
     </div>
     <hr />

     <div>
      <h2 className="text-2xl font-semibold m-2">AI-Powered Smartwatches</h2>
      <img
          src="/images/Smart-watches.jpg"
          alt="Smart Watches"
          className="w-full h-90 object-fill rounded-xl mb-6"
        />
      <p>
       These watches do more than track steps — they monitor your heart, sleep,
       stress, and even use AI to detect health risks early. Look out for Apple
       Watch Series 10 and Galaxy Watch 7.
      </p>
     </div>
     <hr />

     <div>
      <h2 className="text-2xl font-semibold">Smart Home Assistants with Emotions</h2>
      <img
          src="/images/alexa-vs-google.jpg"
          alt="Alexa vs Google"
          className="w-full h-70 object-fit rounded-xl mb-6"
        />
      <p>
       Alexa and Google Assistant are now more human. They respond to emotions,
       suggest breaks, and adjust smart home settings to your mood.
      </p>
     </div>
     <hr />

     <div>
      <h2 className="text-2xl font-semibold">AI Noise-Cancelling Earbuds</h2>
      <img
          src="/images/ai-noise-cancelation-earbuds.jpg"
          alt="Ai noise cancelation earbuds"
          className="w-full h-70 object-cover rounded-xl mb-6"
        />
      <p>
       Translate languages in real-time, enjoy immersive 3D audio, and block out
       noise with earbuds that learn your sound environment.
      </p>
     </div>
     <hr />

     <div>
      <h2 className="text-2xl font-semibold">Smart Door Locks with Face ID</h2>
      <img
          src="/images/smart-door-locks.jpg"
          alt="Smart Door Locks with Face ID"
          className="w-full h-70 object-cover rounded-xl mb-6"
        />
      <p>
       Say goodbye to keys. These locks recognize your face or fingerprint and
       offer full control via your phone — secure and convenient.
      </p>
     </div>
     <hr />

     <div>
      <h2 className="text-2xl font-semibold">Smart Mirrors</h2>
      <img
          src="/images/smart-mirror.jpg"
          alt="Smart Mirrors"
          className="w-full h-70 object-cover rounded-xl mb-6"
        />
      <p>
       Not just for looks — smart mirrors offer real-time workouts, skincare analysis,
       and daily health updates from your wall.
      </p>
     </div>
<hr />

     <div>
      <h2 className="text-2xl font-semibold">Robot Cleaners 2.0</h2>
      <img
          src="/images/robot-cleaner.jpg"
          alt="robot cleaner"
          className="w-full h-80 object-fill rounded-xl mb-6"
        />
      <p>
       The 2025 robot vacuums can mop, climb steps, avoid wires, and patrol your
       home — fully automated, fully smart.
      </p>
     </div>
    </section>

    <div className="mt-10 border-t pt-6">
     <h3 className="text-xl font-semibold mb-2">Final Thoughts</h3>
     <p>
      2025's smart gadgets are more than tools — they're essential companions.
      Whether it's for home, health, or productivity, these innovations are set to
      transform your everyday life.
     </p>
    </div>
   </main>
  </div>
 )
}

export default page
