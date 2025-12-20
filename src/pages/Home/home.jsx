import Hero from "./Hero"
import CTA from "./CTA"
import FAQ from "./FAQ"

export default function Home()
{
    return(
        <>
        <Hero/>
        {/* <Stats/>
        <Features/>
        <Pricing/> */}
        <FAQ/>
        <CTA/>

        </>
    )
}