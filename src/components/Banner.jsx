import React, { useState } from 'react'
import { FiMapPin, FiSearch } from "react-icons/fi"
const Banner = ({ query, changeinputhandler }) => {

  return (
    <div className='mb-12'>
      <p className='text-5xl ml-12 font-semibold pt-20'> Find your <span className='text-blue-500'>new job</span> today</p>
      
      <p className='text-gray-400 ml-12 pt-2'>Thousands of jobs in the computer,engineering and technology sectors are waiting for you.</p>


      <form>
        <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4 ml-12 mt-8'>
          <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
              -within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
            <input type="text" name="title" id="title" placeholder='What position are you looking for ?'
              className='block flex-1 border- bg-transparent py-1.5 pl-8 text-gray-900
                placeholder: text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              onChange={changeinputhandler}
              value={query}
            />
            <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300
              -within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
            <input type="text" name="title" id="title" placeholder='Location' onChange={changeinputhandler}
              className='block flex-1 border- bg-transparent py-1.5 pl-8 text-gray-900
                placeholder: text-gray-400 focus:right-0 sm:text-sm sm:leading-6'      
              
            />
            <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400' />
          </div>
          <button className='bg-blue-500 text-white rounded-md p-1 font-semibold' type='submit'>Search</button>
        </div>
      </form>

    </div>

  )
}

export default Banner