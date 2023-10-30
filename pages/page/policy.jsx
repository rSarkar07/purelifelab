import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function Policy() {
    return (
        <div >
           <Nav />
            <div className="px-4 text-left mt-[100px] ">
           <p className="text-center mb-2 font-extrabold text-2xl text-[#5d46d4]"> Policy </p>
            <p>PureLifeLab may contain links to third-party websites or resources for your convenience and information. We do not endorse or assume responsibility for the privacy policies of these third-party websites. By clicking on these links, you acknowledge that you are leaving our website and are subject to the terms and conditions of the external site.</p> <br />
            <p>We encourage you to review the privacy policies and terms of use of any third-party website that you visit, as they may differ from our own policies. PureLifeLab is not responsible for any interactions, purchases, or transactions made on third-party websites, and we disclaim any liability for any issues or disputes that may arise from your interactions with them.</p>
            </div>
                      <br /> <br />
            <Footer />
        </div>
    )
}