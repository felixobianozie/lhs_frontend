/*
The footer
*/
import SocialMediaLinks from "./SocialMediaLinks"

function Footer() {
    return (
        <div className="w3-container w3-black w3-row" style={{minHeight:"100px"}}>
            <div className="w3-col s12 l6 w3-padding-16 w3-center">
            &#169; 2023 LUTHERAN HIGH SCHOOL. All rights reserved. 
            </div>
            <div className="w3-col s12 l6" >
                <div style={{width:"100px", marginRight:"auto", marginLeft: "auto"}}>
                    <SocialMediaLinks />
                </div>
                    
            </div>
        </div>
    )
}

export default Footer