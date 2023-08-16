/**
 * Home top navigation
 */
import SignInUpMobile from "./SignInUpMobile"

function HomeTopNav() {
    const dropDown = () => {
        let x = document.getElementById("home_nav");
        let y = document.getElementById("menu_dropdown");

        y.classList.toggle("change");

        if (x.className.indexOf("w3-show") === -1) { 
        x.className += " w3-show";
        } else {
        x.className = x.className.replace(" w3-show", "");
        }
    }

    return (
        <>
            {/* header top navigation for desktop display */}
            <div className="w3-cell-row w3-black w3-container">
                <div id="menu_dropdown" className="container w3-hide-large" onClick={dropDown}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-text-red w3-hide-small w3-hide-medium"><strong>HOME</strong></a>
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium"><strong>ABOUT US</strong></a>            
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium"><strong>ADMISSION</strong></a>
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium"><strong>FEES & PAYMENTS</strong></a>
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium"><strong>EVENTS & CALENDAR</strong></a>
                <a href="/" className="w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium"><strong>RESULTS PORTAL</strong></a>
                <a href="/" className="w3-cell w3-button w3-hide-small w3-hide-medium"><strong>ALUMNI</strong></a>
                <SignInUpMobile/>
            </div>
            {/* header top navigation for mobile display */}
            <div id="home_nav" className="w3-center w3-hide w3-hide-large w3-animate-opacity">
                <a href="/" className="w3-text-deep-orange"><div className="w3-button w3-round-large w3-card-2 w3-animate-left	" style={{width: "90%", marginBottom: "5px"}}><strong>HOME</strong></div></a>
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ABOUT US</strong></div></a>            
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ADMISSION</strong></div></a>            
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>FEES & PAYMENTS</strong></div></a>            
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>EVENTS & CALENDAR</strong></div></a>            
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>RESULTS PORTAL</strong></div></a>            
                <a href="/"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ALUMNI</strong></div></a>            
            </div>
        </>
    )
}

export default HomeTopNav