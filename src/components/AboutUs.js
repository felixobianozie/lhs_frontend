/*
About us section
*/
import about_us from "../assets/about_us.png"
import { Link } from "react-router-dom"

function AboutUs() {
    return (
        <>
            <div className="w3-row w3-container w3-padding-64 w3-pale-blue">
                <div className="w3-col l6">
                    <img className="w3-animate-fading" src={about_us} alt="About us" style={{maxWidth:"100%"}}/>
                </div>
                <div className="w3-col l6 w3-container">
                    <ul className="w3-xlarge">
                        <li>Learn our history and philosophy</li>
                        <li>Understand our teaching and learning strategies</li>
                        <li>Lutheran High School Anthem and Pledge</li>
                        <li>Know our vission and mission</li>
                        <li>Meet our administrators</li>
                        <li>See why we are your top choice</li>
                    </ul>
                    <Link to='/about' className="w3-button w3-blue w3-round w3-section">About Us</Link>
                </div>
            </div>
        </>
    )
}

export default AboutUs