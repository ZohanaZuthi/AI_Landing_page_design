import Hero from "./Hero"
import CTA from "./CTA"
import FAQ from "./FAQ"
import Pricing from "./Pricing"

export default function Home()
{
    return(
        <>
        <Hero/>
        {/* <Stats/>
        <Features/> */}
        <Pricing/>
        <FAQ/>
        <CTA/>

        </>
    )
}