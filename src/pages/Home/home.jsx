import Hero from "./Hero"
import CTA from "./CTA"
import FAQ from "./FAQ"
import Pricing from "./Pricing"
import Features from "./Features"
import Stats from "./Stats"

export default function Home()
{
    return(
        <div >
        <Hero/>
        
        <Features/>
        <Stats/>
        <Pricing/>
        <FAQ/>
        <CTA/>

        </div>
    )
}