/**
 * Home top navigation
 */
import { useState, useEffect } from "react";
import SignInUpMobile from "./SignInUpMobile"
import { Link } from "react-router-dom";


function HomeTopNav() {
    const active = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium w3-text-red';
    const inactive = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium';

    const [tabClass, setTabClass] = useState([active, inactive, inactive, inactive, inactive, inactive, inactive]);

    const switchTabIndicator = (n) => {
        setTabClass(previousState => {
            let newState = [];
            for (let i = 0; i < previousState.length; i++) {
                if (i === n) {
                    newState.push(active);
                } else {
                    newState.push(inactive);
                }
            };
            return newState
        });
      }

      useEffect(() => {
        document.title = 'LHS | About';
      }, []);

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
                <Link to="/" className={tabClass[0]} onClick={() => switchTabIndicator(0)}><strong>HOME</strong></Link>
                <Link to="/about" className={tabClass[1]} onClick={() => switchTabIndicator(1)}><strong>ABOUT US</strong></Link>            
                <Link to="/admission" className={tabClass[2]} onClick={() => switchTabIndicator(2)}><strong>ADMISSION</strong></Link>
                <Link to="/fees" className={tabClass[3]} onClick={() => switchTabIndicator(3)}><strong>FEES & PAYMENTS</strong></Link>
                <Link to="/events" className={tabClass[4]} onClick={() => switchTabIndicator(4)}><strong>EVENTS & CALENDAR</strong></Link>
                <Link to="/results" className={tabClass[5]} onClick={() => switchTabIndicator(5)}><strong>RESULTS & TRANSCRIPT</strong></Link>
                <Link to="/alumni" className={tabClass[6]} onClick={() => switchTabIndicator(6)}><strong>ALUMNI</strong></Link>
                <SignInUpMobile/>
            </div>
            {/* header top navigation for mobile display */}
            <div id="home_nav" className="w3-center w3-hide w3-hide-large w3-animate-opacity">
                <Link to="/" className="w3-text-deep-orange"><div className="w3-button w3-round-large w3-card-2 w3-animate-left	" style={{width: "90%", marginBottom: "5px"}}><strong>HOME</strong></div></Link>
                <Link to="/about"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ABOUT US</strong></div></Link>            
                <Link to="/admission"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ADMISSION</strong></div></Link>            
                <Link to="/fees"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>FEES & PAYMENTS</strong></div></Link>            
                <Link to="/events"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>EVENTS & CALENDAR</strong></div></Link>            
                <Link to="/results"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>RESULTS & TRANSCRIPT</strong></div></Link>            
                <Link to="/alumni"><div className="w3-button w3-round-large w3-card-2 w3-animate-left" style={{width: "90%", marginBottom: "5px"}}><strong>ALUMNI</strong></div></Link>            
            </div>
        </>
    )
}

export default HomeTopNav