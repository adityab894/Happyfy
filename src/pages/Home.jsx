import React from 'react'
import Navbar from '../components/Navbar'
import Breathe from '../components/Breathe'

const Home = () => {
  return (
    <div className=' bg-[#99fbc2] w-[100%]'>
        <Navbar/>
        <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center flex-col items-center">
      <div className=' w-[50%] h-[400px] relative translate-y-[-50%]'>
        <div className=" w-[200px] h-[200px] bg-[#1db9a4] blur-[50px] absolute left-[80%] top-[0%] an1"></div>
        <div className=" w-[200px] h-[200px] bg-[#23de33] blur-[50px] absolute left-[60%] top-[0%] an2"></div>
      </div>
      <div class="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 absolute gap-10 translate-y-[-10%]">
        <div class="space-y-2 text-center flex flex-col gap-3">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Your mental health matters</h1>
          <p class="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed bg-opacity-50 backdrop-filter backdrop-blur-md bg-white bg-opacity-30 border border-gray-200 p-4 rounded-lg">
            Access the tools you need to manage stress, anxiety, and depression with our easy-to-use app.
          </p>
        </div>
        <img
          // src="/assets/hero.png"
          src='https://i.pinimg.com/564x/66/23/84/66238452f4a6429cb14bf753ecfee63c.jpg'
          width="550"
          height="310"
          alt="Hero"
          class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
        />
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-[#f0ffe9]">
      <div class="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features to help you thrive</h2>
          <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our app is designed to support your mental well-being with a range of features.
          </p>
        </div>
        <div class="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:gap-10">
          <div class="flex flex-col items-center justify-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-12 h-12"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="space-y-2">
              <h3 class="font-bold">EmoProbe</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Easily log your mood disorder and track your emotional well-being over time.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-12 h-12"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="space-y-2">
              <h3 class="font-bold">Guided Meditation</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Access calming meditation exercises to help reduce stress and anxiety.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-12 h-12"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="space-y-2">
              <h3 class="font-bold">Personalized Support</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Connect with mental health professionals and access personalized resources.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-12 h-12"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="space-y-2">
              <h3 class="font-bold">Mindfulness Exercises</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Practice mindfulness with quick exercises designed to promote a sense of calm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our users are saying</h2>
          <p class="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            Don't just take our word for it. Our app has helped people improve their mental well-being.
          </p>
        </div>
        <div class="mx-auto grid max-w-3xl items-start gap-6 sm:grid-cols-2 lg:gap-12">
          <div class="flex flex-col gap-2">
            <p class="0">
            Welcome to Happyfy, your all-in-one mobile application dedicated to supporting your mental health and well-being journey. With Happyfy, you can access a range of resources and tools designed to help you manage stress, anxiety, and depression effectively.
            </p>
           
          </div>
          <div class="flex flex-col gap-2">
            <p class="">
            HAPPYFY empowers you to take proactive steps towards self-care and resilience-building. Set personalized reminders and notifications to practice mindfulness exercises, engage in self-care activities, or attend therapy sessions. With HAPPYFY by your side, you can cultivate healthy habits and prioritize your mental health with ease
            </p>
            
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div class="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div class="space-y-3 text-center">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
          <p class="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about our app? Contact our team for support.
          </p>
        </div>
        <form class="flex flex-col gap-2 min-[400px]:flex-row justify-center items-center">
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your email"
            type="email"
            fdprocessedid="1iqi3"
          />
          <textarea
            class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
            placeholder="How can we help?"
          ></textarea>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-white"
            type="submit"
            fdprocessedid="57yuk8"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </main>
    </div>
  )
}

export default Home