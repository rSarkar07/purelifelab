import React from "react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function OurMission() {
    return (
        <>
        <div>
            <Nav />
            
            <br /><br /><br /> <br /> <br />

            <div className="flex justify-center">
            <img className="rounded" src="/our-mission.svg" alt="our-nission"  width={"350px"}/>
            </div>
            <h1 className="text-center"> <span className="text-[#5d46d4] text-2xl font-extrabold" >Our</span> <span className="text-[#d49946] text-2xl font-extrabold">Mission</span></h1>

            <p className="px-6 text-left py-3 font-custom-des text-[#572b8a]">At <b className="text-orange-600">PureLifeLab,</b> our unwavering mission is to be your steadfast companion on your journey toward a healthier, more radiant life. We believe that true well-being is a harmonious blend of inner vitality and outer beauty. Our purpose is to provide you with the knowledge, inspiration, and resources to nurture your body, skin, and hair naturally.</p>
            <p className="px-6 text-left py-2 font-custom-des text-[#572b8a]">We're driven by a passion for promoting a lifestyle that is pure, balanced, and life-affirming. In a world filled with countless options and contradictory advice, we stand as a beacon of clarity and trustworthiness. Our commitment is to empower you with the information and tools needed to make informed choices regarding your health, beauty, and overall lifestyle.</p>
            <p className="px-6 text-left py-2 font-custom-des text-[#572b8a]">Through our informative blogs, product reviews, interactive forums, and newsletters, we aim to create a platform where you can connect, learn, and grow. At PureLifeLab, we invite you to join us in embracing a lifestyle that exudes purity, vitality, and enduring beauty. Together, let's thrive and radiate wellness, one step at a time.</p>


           
        </div>

        <div> <Footer /></div>
        </>
    )
  }