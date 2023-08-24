/*
Admission status and contact details
*/
import school_girl from "../assets/school_girl.jpeg"
import ContactIcon from "./ContactIcon";
import SocialMediaLinks from "./SocialMediaLinks";
import { Link } from "react-router-dom";

function AdmissionContact() {
    const mystyle = {
        textShadow: "0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black, 0px 0px 15px black"
    };

    return (
        <div className="w3-row w3-text-white w3-sand">
            <div className="w3-col l6 w3-sand w3-container w3-padding-64 w3-center">
                <div className="w3-xxlarge"><strong>Admission Status 2023/2024</strong></div>
                <div className="w3-tag w3-green felix-animate-fading">ongoing</div>
                <p className="w3-large">Application forms for entrance examinations into JS1, JSS2, SS1 
                    and SS2 are now on sale at a non-refundable fee of 
                    ₦ 3,000. The application form can be filled and submitted online or 
                    physically. You would be scheduled for an entrance examination afterwards.
                    Follow the link below to see full details of our application process and entrance examination schedules.</p>
                <Link to='/admission' className="w3-button w3-blue w3-round-large">Admission</Link>
            </div>
            <div className="w3-col l6 w3-padding-64" style={{backgroundImage:`url(${school_girl})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <strong>
                    <div className="w3-right w3-container">
                        <h2 className="w3-text-amber" style={mystyle}><strong>Reach Us Now!</strong></h2>
                        <ContactIcon/>
                        <p style={mystyle}>Lutheran High School Obot Idim, <br/>Ibesikpo Asutan L.G.A, <br/>Akwa Ibom State, <br/>Nigeria</p>
                        <ContactIcon/>
                        <p style={mystyle}>+234-7030578960</p>
                        <ContactIcon/>
                        <p style={mystyle}>+234-8077609080</p>
                        <ContactIcon/>
                        <p style={mystyle}>lhs@gmail.com</p>
                        <br/>
                        <SocialMediaLinks/>
                    </div>
                </strong>
            </div>
        </div>
    )
}

export default AdmissionContact