import React from 'react'

export default function Pricing() {
  return (
    <div className="w-full min-h-screen bg-[url('/img/img85.png')]  bg-center flex items-center justify-center bg-cover text-white ">
        <div className=' group w-[400px] h-[500px] bg-gray-900 p-8 rounded-md transition-all duration-200 hover:-translate-y-4 hover:scale-105 border border-gray-900 hover:border-amber-700'> 
            <div className='text-2xl text-White font-bold group-hover:text-amber-700'>Pro</div>
            <br/>
            <p className='text-gray-500'>Unlock a new level of your personal productivity.</p>
            <br/>
            <div className='text-bold text-3xl'>$17<sup className='text-gray-500 text-sm'> /month <span className='group-hover:bg-amber-700 p-1 text-white rounded-full'>-20%</span></sup></div>
            <div className="flex w-full items-center justify-between p-2 border-b border-white/30"></div>
            <br/>
            <p className='text-gray-500'>What’s included</p>

           <div></div>

        </div>
        
       
    </div>
  )
}
