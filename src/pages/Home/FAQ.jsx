import React from 'react'
import Accordion from '../../component/Accordion';

export default function FAQ (){
  return (
    <div className="relative bg-black overflow-hidden">
        <div className="relative m-40">
        <h1 className=" text-5xl text-center font-bold text-white mb-4">Frequently Asked <br/>Questions</h1>
        <p className="text-gray-300 mb-6 text-center">Got questions? We've got answers. Find everything you need to know about using our platform, plans, and features.</p>

        
        <Accordion/>
        </div>

    </div>
  );
}
