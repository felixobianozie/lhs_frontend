/**
 * Home top navigation
 */
import { useState } from "react";
import SignInUpMobile from "./SignInUpMobile"
import { Link } from "react-router-dom";


function HomeTopNav() {
    const active = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium w3-text-red';
    const inactive = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium';
    const endLink = 'w3-cell w3-button w3-hide-small w3-hide-medium';
    const activeM = "w3-button w3-round-large w3-card-2 w3-text-red";
    const inactiveM = "w3-button w3-round-large w3-card-2";
    const myTitle = ['LHS | Home', 'LHS | About', 'LHS | Admission', 'LHS | Payments', 'LHS | Calendar', 'LHS | Results', 'LHS | Alumni']
    const mobileStyle = {width: "90%", marginBottom: "5px"};

    const [tabClass, setTabClass] = useState([active, inactive, inactive, inactive, inactive, inactive, endLink]);
    const [tabClassM, setTabClassM] = useState([activeM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM]);

    const switchTabIndicator = (n) => {
        setTabClass(previousState => {
            let newState = [];
            for (let i = 0; i < previousState.length; i++) {
                let tmp = active;
                let tmp2 = inactive;
                // remove border line from last navigation link
                if (i === previousState.length - 1) {
                    tmp = tmp.replace('w3-border-right w3-border-white', '');
                    tmp2 = tmp2.replace('w3-border-right w3-border-white', '');
                }
                if (i === n) {
                    newState.push(tmp);
                } else {
                    newState.push(tmp2);
                }
            };
            document.title = myTitle[n];
            return newState
        });
      }

    const switchTabIndicatorMobile = (n) => {
    setTabClassM(previousState => {
        let newState = [];
        for (let i = 0; i < previousState.length; i++) {
            let tmp = activeM;
            let tmp2 = inactiveM;
            if (i === n) {
                newState.push(tmp);
            } else {
                newState.push(tmp2);
            }
        };
        document.title = myTitle[n];
        return newState
    });
    }

    const dropDown = () => {
        let x = document.getElementById("home_nav");
        let y = document.getElementById("menu_dropdown");

        y.classList.toggle("change");
        x.classList.toggle("w3-show");
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
            <div id="home_nav" className="w3-center w3-hide w3-hide-large w3-animate-zoom">
                <Link to="/"><div className={tabClassM[0]} onClick={() => {switchTabIndicatorMobile(0); dropDown()}} style={mobileStyle}><strong>HOME</strong></div></Link>
                <Link to="/about"><div className={tabClassM[1]} onClick={() => {switchTabIndicatorMobile(1); dropDown()}} style={mobileStyle}><strong>ABOUT US</strong></div></Link>            
                <Link to="/admission"><div className={tabClassM[2]} onClick={() => {switchTabIndicatorMobile(2); dropDown()}} style={mobileStyle}><strong>ADMISSION</strong></div></Link>            
                <Link to="/fees"><div className={tabClassM[3]} onClick={() => {switchTabIndicatorMobile(3); dropDown()}} style={mobileStyle}><strong>FEES & PAYMENTS</strong></div></Link>            
                <Link to="/events"><div className={tabClassM[4]} onClick={() => {switchTabIndicatorMobile(4); dropDown()}} style={mobileStyle}><strong>EVENTS & CALENDAR</strong></div></Link>            
                <Link to="/results"><div className={tabClassM[5]} onClick={() => {switchTabIndicatorMobile(5); dropDown()}} style={mobileStyle}><strong>RESULTS & TRANSCRIPT</strong></div></Link>            
                <Link to="/alumni"><div className={tabClassM[6]} onClick={() => {switchTabIndicatorMobile(6); dropDown()}} style={mobileStyle}><strong>ALUMNI</strong></div></Link>            
            </div>
        </>
    )
}

export default HomeTopNav