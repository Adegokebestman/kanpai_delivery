import React, {useState} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {LineChart } from '../components';
import { UserData  } from '../data/dummy';



const Wallet = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month) ,
        datasets: [{
          label:"User Gained",
          data:UserData.map((data) => data.userGain),
          borderColor: '#FF7E20',
          pointBorderWidth: 0,
        //   backgroundColor: '#FF7E20',
          pointBorderColor: '#FF7E20',
          tension: 0.4,
        //   fill: true,
        //   backgroundColor: "#EF38382B",

        }],

      });

  return (
    <div className='mt-10'>
        <div className=''>
        <button className='font-medium mr-4 ml-8 mt-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../Inventory' >
<IoIosArrowBack/>
</Link>
 </button>

 <p className='font-semibold text-2xl inline-block ml-2'>
  Wallet </p>
  </div>

  <div className="p-6 py-6 dark:bg-violet-400 dark:text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row justify-between">
        <div className='m-10 boxShadow w-3/6 p-4'>
        <p className='font-medium'>Your Current Balance</p>
        <div className='rounded-xl mt-4 text-white p-10 h-3/6' style={{background:'linear-gradient(110.46deg, #34A853 0.21%, #147D30 67.2%)'}}>
    <h2 className='text-xl font-medium'> Balance</h2>
    <h1 className='font-bold text-4xl pt-4'> $400.00</h1>
        </div>
        <button className='text-2xl rounded-lg text-white px-6 py-4 mt-4 mb-10' style={{background: 'linear-gradient(110.46deg, #EF3838 0.21%, #FF7E20 81.05%)'}}>Cash Out Balance</button>

    </div>

			{/* <div className="space-x-2 ">

			</div> */}

            <div className='w-3/6   bg-white rounded-xl  mt-6'>
    <span className='font-medium text-lg'> Statistics</span>
    <div className="flex items-center mb-6 -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 border-[#AF501A] dark:text-gray-400">Monthly</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">Weekly</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50">Daily</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">PerDelivery</a>
</div>
    <LineChart chartData={userData}   > </LineChart>
    </div>
			{/* <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a> */}
		</div>
	</div>
</div>

<div>
<h2 className='font-medium ml-8'>Delivery History</h2>
</div>

    </div>
  )
}

export default Wallet