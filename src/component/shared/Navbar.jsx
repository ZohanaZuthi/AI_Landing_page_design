import {Link,NavLink } from "react-router-dom"


export default function Navbar()
{  return(  <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-24 py-12">
    <div className="flex">
      <img src="/img/Logo.png" alt="Logo" className="w-[54px] h-[40.32px]"/>
      <div className="flex flex-auto justify-center text-[14px] md:text-[16px] 
                        gap-[60px] md:gap-[120px] pt-4 text-white  font-semibold">
          
       <NavLink to="/" className={({isActive})=>isActive?"border-b-2 border-orange-400":""} >Home</NavLink>
        <NavLink to="/services" className={({isActive})=>isActive?"border-b-2 border-orange-400":""}>Services</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?"border-b-2 border-orange-400":""}>Contact us</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?"border-b-2 border-orange-400":""}>About us</NavLink></div>
          <button className="bg-orange-400 rounded-md text-white px-4 py-2">Login</button>

        </div>
    </nav>
);
}