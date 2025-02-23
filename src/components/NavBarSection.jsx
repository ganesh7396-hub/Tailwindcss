import React from 'react'

const NavBarSection = ({change}) => {
  return (
  <section>


<header className="text-gray-600 body-font  bg-BgColor text-TextColor">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   
      <svg class="w-10 h-10 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
  <image href="logo/agriicon.jpg" x="0" y="0" height="24" width="24" />
</svg>


      <span className="ml-3 text-xl">AgriGrown</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Agriculture</a>
      <a className="mr-5 hover:text-gray-900">Farming Techniques</a>
      <a className="mr-5 hover:text-gray-900">Organic Farming</a>
      <a className="mr-5 hover:text-gray-900">Crops</a>
    </nav>
    <button className="inline-flex items-center bg-blue-900 text-white text-TextColor border-0 py-1 px-3 focus:outline-none hover:bg-black hover:bg-TextColor rounded text-base mt-4 md:mt-0"
    onClick={change}
    >Dark / Light
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  </section>
  )
}

export default NavBarSection
