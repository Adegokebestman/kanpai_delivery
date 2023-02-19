import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';


const Calender = () => {
  return (
    <div className='mt-10'>
        <div>

<button className='font-medium mr-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../Dashboard' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-2xl inline-block ml-2'>
  Calender </p>

  </div>
  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Monday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Tuesday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Wednesday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Thursday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Friday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Saturday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>

  <div className='boxShadow mt-6 p-6 rounded-xl w-11/12'>
  <div className='flex justify-between'>
    <span className='font-medium'> Sunday </span>
    <label for="Toggle1" className="inline-flex items-center space-x-4 mr-6 cursor-pointer dark:text-gray-100">
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-[#FF7E20] dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full bg-white shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
	</span>
	{/* <span className='uppercase'>CLick To Make Available</span> */}
</label>
  </div>
    <button className='text-[#FF7E20] mt-2' type="time" >+ Add prefer work hour</button>
  </div>
    </div>
  )
}

export default Calender