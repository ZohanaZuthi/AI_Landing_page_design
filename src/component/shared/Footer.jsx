export default function Footer()
{ return(
   
 <div className="bg-black text-white py-24">
   <div className="border border-white/20"></div>
 <div className="flex mx-4 my-12 md:mx-12 md:my-20 lg:m-[120px] ">
   <div className="flex flex-col p-6">
      <div className="text-xl">About Us</div>
      <br/>
     <p>We're a team of designers, engineers, and innovators building AI tools that empower anyone to turn imagination into stunning visuals—faster, smarter, and effortlessly.</p>
   </div>
   <div className="flex flex-col p-6">
      <h1 className="p-2 text-amber-700 font-bold">Useful Links</h1>
      <p className="p-2">About</p>
      <p className="p-2">Services</p>
      <p className="p-2">Team</p>
      <p className="p-2">Prices</p>
   </div>
   <div className="flex flex-col p-6">
      <h1 className="p-2 text-amber-700 font-bold">Help</h1>
      <p className="p-2">Customer Support</p>
      <p className="p-2">Terms & Conditions</p>
      <p className="p-2">Privacy Policy</p>
      <p className="p-2">Contact Us</p>
   </div>
   <div className="flex flex-col p-6">
      <h1 className="p-2 text-amber-700 font-bold">Connect With Us</h1>
      <p className="p-2">27 Division St, New York,NY 10002, USA</p>
      <p className="p-2">+123 324 2653</p>
      <p className="p-2">username@mail.com</p>
     
   </div>
   
 </div>
 <div className="border border-amber-700/40"></div>
 <br/>
 
 <div className="flex items-center text-xl justify-between text-sm text-gray-400">
  <span>© 2024 All Rights Reserved.</span>
  <img src="./img/ok.png" alt="" className="h-6" />
</div>
 </div>
);
}