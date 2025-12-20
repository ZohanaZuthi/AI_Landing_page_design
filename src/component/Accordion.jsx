import React from 'react'
import { useState} from 'react'


export default function Accordion() {

    const [accordionOpen,setAccordionOpen]=useState(false)
  return (
    <div className='py-2 text-white'>
        <button onClick={()=>setAccordionOpen(!accordionOpen)} className='flex items-center justify-between w-full text-white p-2'>
            What is this platform used for?
            {accordionOpen?< img src='/img/icon1.png'  className="w-4 h-4"/>:< img src='/img/icon.png'  className="w-4 h-4"/>}
            

        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-400
            ${accordionOpen
            ?'grid-rows[1fr] opacity-100'
            :`grid-rows-[0fr] opacity-0`}`
        }>
            <div className='overflow-hidden'>It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.</div>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-white/30"></div>
    </div>

  )
}


