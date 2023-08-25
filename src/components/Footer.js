/*
The footer
*/
import SocialMediaLinks from "./SocialMediaLinks"

function Footer() {
    return (
        <div className="w3-container w3-black w3-row" style={{minHeight:"100px"}}>
            <div className="w3-col s12 l6 w3-padding-16 w3-center">
            &#169; 2023 LUTHERAN HIGH SCHOOL. All rights reserved.. 
            </div>
            <div className="w3-col s12 l6" style={{}}>
                <div className="w3-yellow" style={{marginRight:"auto", marginLeft: "auto", width:"200px"}}>
                    <SocialMediaLinks />
                </div>
                    
            </div>
        </div>
    )
}

export default Footer