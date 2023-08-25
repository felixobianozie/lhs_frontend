/*
School academic programs
*/
import waec from "../assets/waec_logo.png"
import neco from "../assets/neco_logo.png"
import sat from "../assets/sat_logo.png"
import HomeSectionHeader from "./HomeSectionHeader"


function AcadPrograms() {
    return (
        <>
            <HomeSectionHeader name="ACADEMIC PROGRAMS" />
            <div className="w3-container w3-padding-64 w3-row">
                <div className="w3-center w3-col l4 w3-section">
                    <img className="" src={waec} alt="WAEC" style={{maxWidth:"200px"}}/>
                    <div style={{textShadow: "0px 0px 20px green"}}>West African Examination Council </div><div className="w3-tag w3-green">regular</div>
                </div>
                <div className="w3-center w3-col l4 w3-section">
                    <img className="" src={neco} alt="WAEC" style={{maxWidth:"200px"}}/>
                    <div style={{textShadow: "0px 0px 20px green"}}>National Examination Council</div><div className="w3-tag w3-green">regular</div>
                </div>
                <div className="w3-center w3-col l4 w3-section">
                    <img className="" src={sat} alt="WAEC" style={{maxWidth:"200px"}}/>
                    <div style={{textShadow: "0px 0px 20px indigo"}}>Standard Aptitude Test</div><div className="w3-tag w3-indigo">exclusive</div>
                </div>
            </div>
        </>
    )
}

export default AcadPrograms