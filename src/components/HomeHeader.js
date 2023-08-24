/*
Home Header
*/
import header_logo from '../assets/lhs_logo.png'
import smiley from '../assets/smiley 1 transparent.png'

function HomeHeader() {
    return (
        <div className="w3-container w3-row">
            {/* header logo and description for mobile display */}
            <div className="w3-center w3-padding w3-hide-medium w3-hide-large">
                <img src={header_logo} alt="School Logo" style={{maxWidth: "95px"}}></img>
                <div className="w3-container">
                    <div className="w3-xlarge w3-text-indigo"><strong>Lutheran High School</strong></div>
                    <div className="w3-large">Obot Idim, Ibesikpo Asutan LGA.</div>   
                    <div className="w3-text-red"><i>...upholding academic standards since 1954</i></div>
                </div>  
            </div>
            {/* header logo and description for desktop display */}
            <div className="w3-col l6 m12 w3-padding w3-hide-small">
            <img className="w3-left" src={header_logo} alt="School Logo" style={{maxWidth: "95px"}}></img>
            <div className="w3-container w3-center w3-left">
                <div className="w3-xlarge w3-text-indigo"><strong>Lutheran High School</strong></div>
                <div className="w3-large">Obot Idim, Ibesikpo Asutan LGA.</div>   
                <div className="w3-text-red"><i>...upholding academic standards since 1954</i></div>
            </div>
            <div className="w3-right w3-hide-small w3-hide-large">
                <img src={smiley} alt="School Logo" style={{maxWidth: "90px"}}></img>
                <div className="w3-center"><strong>Rating?</strong></div>   
            </div>
            </div>
            {/* header contact information */}
            <div className="w3-col l6">
            <div className="w3-cell-row w3-padding-16">
                <div className="w3-cell w3-container w3-right">
                    <div><strong>Hot Line</strong></div>
                    <div className="w3-large">+234-7030578960</div>
                </div>
                <div className="w3-cell w3-container w3-leftbar w3-border-indigo">
                    <div><strong>Official Hours</strong></div>
                    <div className="w3-large">7:00am - 2:00pm (WAT)</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeHeader