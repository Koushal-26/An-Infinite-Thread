import Image from "next/image";
import Link from "next/link";


const Home = () => {

  return (
    <div className="container max-w-8xl">
      <div className="flex items-center p-2">
        <div className="font-extrabold p-2 text-3xl">Category :</div>
      </div>

      <div className="flex-row md:flex m-5 max-w-8xl">
        <div className="flex flex-col gap-6 p-3">
          <div className="bg-green-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 pt-2">Coding & Web Dev</h1>
                <Link href="/category/Coding&WebDev">
                  <button className=" bg-white p-2 rounded-full hover:cursor-pointer hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out mt-2 absolute right-6">
                    <Image src="/arrow.gif" width={25} height={25} alt="Go into article"
                      unoptimized />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-2 px-2">Explore the art and science of modern web development.</p>
              <div className="flex justify-center items-center my-15">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/developer.gif"
                  width={150}
                  height={150}
                  alt="web devloper"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/code.gif"
                  width={150}
                  height={150}
                  alt="Code"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="bg-violet-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Self Improvement</h1>
                <Link href="/category/SelfImprovement">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base p-2">Self-improvement isn't about perfection — it's about progress, purpose, and pushing beyond limits.</p>
              <div className="flex justify-center items-center m-15">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/success.gif"
                  width={150}
                  height={150}
                  alt="success"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/self.gif"
                  width={150}
                  height={150}
                  alt="Energy"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="bg-red-200 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Gaming & Entertainment</h1>
                <Link href="/category/Gaming&Entertainment">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="m-2 text-gray-600 text-base pb-4">Unlock a world of gaming, movies, and digital excitement.</p>
              <div className="flex justify-center items-center">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/game.gif"
                  width={130}
                  height={130}
                  alt="Game Image"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/entertainment.gif"
                  width={140}
                  height={140}
                  alt="Entertainment"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-3">
          <div className="bg-gray-200 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Health & Fitness</h1>
                <Link href="/category/Health&Fitness">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-2 px-2">Balance your body, mind, and spirit with mindful fitness and wellness.</p>
              <div className="flex justify-center items-center m-4">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/health.gif"
                  width={170}
                  height={170}
                  alt="Health"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/fitness.gif"
                  width={130}
                  height={130}
                  alt="Fitness"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Education/Study Tips</h1>
                <Link href="/category/Education&StudyTips">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-1 px-2">Study better, learn faster — practical tips for students and lifelong learners.</p>
              <div className="flex justify-center items-center m-6">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/book.gif"
                  width={130}
                  height={130}
                  alt="Education"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/study-tips.gif"
                  width={140}
                  height={140}
                  alt="Study Tips"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className=" bg-yellow-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Eco Living</h1>
                <Link href="/category/EcoLiving">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-3 px-2">Eco Living is a journey toward a greener, cleaner, and more conscious life.</p>
              <div className="flex justify-center items-center">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/eco.gif"
                  width={240}
                  height={240}
                  alt="Don't remove trees"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-2">
          <div className=" bg-cyan-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Tech & Gadgets</h1>
                <Link href="/category/Tech&Gadgets">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-4 px-2">Explore the latest in technology, smart devices, and innovative gadgets.</p>
              <div className="flex justify-center items-center m-8">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/wifi.gif"
                  width={100}
                  height={100}
                  alt="Tech"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/computer.gif"
                  width={200}
                  height={200}
                  alt="Gadgets"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className=" bg-pink-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Travel & Adventure</h1>
                <Link href="/category/Travel&Adventure">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base py-3 px-2">Discover breathtaking places, untold stories, and travel tips from around the world.</p>
              <div className="flex justify-center items-center m-8">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/travel.gif"
                  width={110}
                  height={110}
                  alt="Travel"
                  unoptimized
                />
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/park.gif"
                  width={140}
                  height={140}
                  alt="Park"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className=" bg-orange-100 rounded-3xl hover:shadow-2xl transition duration-300 relative">
            <div className="p-6">
              <div className="flex">
                <h1 className="text-2xl font-semibold text-gray-800 px-2 py-2">Food & Recipes</h1>
                <Link href="/category/Food&Recipes">
                  <button className="bg-white p-2 rounded-full hover:ring-1 hover:ring-gray-700 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-pointer mt-2 absolute right-6">
                    <Image
                      src="/arrow.gif"
                      width={25}
                      height={25}
                      alt="Go into article"
                      unoptimized
                    />
                  </button>
                </Link>
              </div>
              <span className="px-2 font-bold">article 1</span>
              <p className="mt-2 text-gray-600 text-base px-2">Delicious recipes, cooking tips, and food inspiration to satisfy every craving.</p>
              <div className="flex justify-center items-center">
                <Image className="hover:scale-110 transition-transform duration-300 ease-in-out"
                  src="/vegetables.gif"
                  width={160}
                  height={160}
                  alt="Eat Healthy Food"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
