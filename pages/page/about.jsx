import React from "react"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function AboutPage() {
    return (
        
        <div>
            <Nav />
            
            <br /><br /><br /> <br />

            <div className="flex justify-center">
            <img src="/about-us.svg" alt="aboutus"  width={"250px"}/>
            </div>

            <div className="xl:px-12">
            <h1 className="text-center"> <span className="text-[#5d46d4] text-2xl font-extrabold" >About</span> <span className="text-[#d49946] text-2xl font-extrabold">Us</span></h1>

            <p className="px-6 text-left py-2 font-custom-des text-[#572b8a]">Welcome to <b className="text-orange-600">PureLifeLab,</b> where we are dedicated to helping you embrace a healthier, more vibrant lifestyle. Our journey began with a simple yet profound belief: that everyone deserves the opportunity to live a life that is pure, balanced, and full of vitality.</p>
            <p className="px-6 text-left py-2 font-custom-des text-[#572b8a]">We are excited to be a part of your journey to a purer, healthier, and more beautiful life. PureLifeLab is not just a website; it's a companion on your path to well-being. We're here to inspire, guide, and support you every step of the way.</p>
            <p className="px-6 text-left py-2 font-custom-des text-[#572b8a]"> <b className="text-orange-600">Thank you</b> for being a part of the PureLifeLab community. <br/> <span className="text-orange-600 font-extrabold">Let's thrive together!</span></p>
            

            </div>
            <br /> <br />
            <Footer />
        </div>
    
    )
  }