import { TextEffect } from "../components/TextEffect";

const Home = () => {
  return (
<>
<section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <TextEffect
      per="char"
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User and Manage Your Tasks

      </TextEffect>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      This productive tool is designed to help
you better manage your task 
project-wise conveniently!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold sm:text-4xl">
      Master Your Day with Effortless Task Management
</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          alt="team"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-gray-600">
          <p>
          smart Task Organization: Group your tasks by category, deadline, or priority with just a few clicks. Say goodbye to scattered to-do lists and hello to seamless task management.
          </p>

          <p>
          Access your to-do lists anytime, anywhere. With real-time sync, your tasks are always up-to-date, whether you’re on your phone, tablet, or computer,
          Boost Productivity: Focus on what matters most with a tool that minimizes distractions and maximizes efficiency.
Stay Organized: Clear the clutter from your mind and keep all your tasks neatly arranged and easily accessible.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          our intuitive platform ensures you stay focused, productive, and in control—no matter how hectic life gets.          </h2>

          <p className="mt-4 text-gray-600">
          Improve Collaboration: Enhance team communication and ensure everyone is on the same page with shared to-do lists and real-time updates.
          Reduce Stress: Feel confident that nothing will slip through the cracks with our powerful task management features.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="team"
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW18ZW58MHx8MHx8fDI%3D"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Home;
