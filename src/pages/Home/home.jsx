import Star from '../../component/shared/star'
export default function home() {
  return (
    <section className="w-screen h-screen bg-[url('/img/img85.png')] bg-no-repeat bg-cover">
       <Star/>
       <div className=' flex flex-col items-center justify-center font-semibold text-white text-6xl'>
        <div>Automate{" "}<span className='text-orange-400 gap-1' > Intelligence</span>.</div>
        <div> Accelerate Growth.</div></div>
        <div className='flex text-white text-center px-10 md:px-120'>Our AI-powered SaaS platform empowers businesses to streamline operations, automate repetitive tasks, and make smarter, data-driven decisions—all from one intuitive dashboard.</div>
        <div className='flex justify-center gap-12 p-4'>
          <button className="bg-orange-400 rounded-md text-white px-4 py-2">Get Started</button>
          <button className="bg-black border-1 rounded-md text-white px-4 py-2">See Details</button>
        </div>
    </section>
  );}
