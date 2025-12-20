import React from 'react'
import { useState} from 'react'


export default function Accordion({title,answer}) {

    const [accordionOpen,setAccordionOpen]=useState(false)
  return (
    <div className='py-2 text-white'>
        <button onClick={()=>setAccordionOpen(!accordionOpen)} className='flex items-center justify-between w-full text-white p-2'>
           {title}
            {accordionOpen?< img src='/img/icon1.png'  className="w-4 h-4"/>:< img src='/img/icon.png'  className="w-4 h-4"/>}
            

        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-400
            ${accordionOpen
            ?'grid-rows[1fr] opacity-100'
            :`grid-rows-[0fr] opacity-0`}`
        }>
            <div className='overflow-hidden'>{answer}</div>
        </div>
        <div className="flex w-full items-center justify-between py-4 border-b border-white/30"></div>
    </div>

  )
}


