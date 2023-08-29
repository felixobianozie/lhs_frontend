/**
 * Home top navigation
 */
import useNavClass from "../hooks/useNavClass";
import SignInUpMobile from "./SignInUpMobile"
import { Link } from "react-router-dom";

function HomeTopNav() {
    const mobileStyle = {width: "90%", marginBottom: "5px"};

    const { topNav, switchTabIndicator } = useNavClass();

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
                <Link to="/" className={topNav.desk[0]} onClick={() => switchTabIndicator(0)}><strong>HOME</strong></Link>
                <Link to="/about" className={topNav.desk[1]} onClick={() => switchTabIndicator(1)}><strong>ABOUT US</strong></Link>            
                <Link to="/admission" className={topNav.desk[2]} onClick={() => switchTabIndicator(2)}><strong>ADMISSION</strong></Link>
                <Link to="/fees" className={topNav.desk[3]} onClick={() => switchTabIndicator(3)}><strong>FEES & PAYMENTS</strong></Link>
                <Link to="/events" className={topNav.desk[4]} onClick={() => switchTabIndicator(4)}><strong>EVENTS & CALENDAR</strong></Link>
                <Link to="/results" className={topNav.desk[5]} onClick={() => switchTabIndicator(5)}><strong>RESULTS & TRANSCRIPT</strong></Link>
                <Link to="/alumni" className={topNav.desk[6]} onClick={() => switchTabIndicator(6)}><strong>ALUMNI</strong></Link>
                <SignInUpMobile/>
            </div>

            {/* header top navigation for mobile display */}
            <div id="home_nav" className="w3-center w3-hide w3-hide-large w3-animate-zoom">
                <Link to="/"><div className={topNav.mob[0]} onClick={() => {switchTabIndicator(0); dropDown()}} style={mobileStyle}><strong>HOME</strong></div></Link>
                <Link to="/about"><div className={topNav.mob[1]} onClick={() => {switchTabIndicator(1); dropDown()}} style={mobileStyle}><strong>ABOUT US</strong></div></Link>            
                <Link to="/admission"><div className={topNav.mob[2]} onClick={() => {switchTabIndicator(2); dropDown()}} style={mobileStyle}><strong>ADMISSION</strong></div></Link>            
                <Link to="/fees"><div className={topNav.mob[3]} onClick={() => {switchTabIndicator(3); dropDown()}} style={mobileStyle}><strong>FEES & PAYMENTS</strong></div></Link>            
                <Link to="/events"><div className={topNav.mob[4]} onClick={() => {switchTabIndicator(4); dropDown()}} style={mobileStyle}><strong>EVENTS & CALENDAR</strong></div></Link>            
                <Link to="/results"><div className={topNav.mob[5]} onClick={() => {switchTabIndicator(5); dropDown()}} style={mobileStyle}><strong>RESULTS & TRANSCRIPT</strong></div></Link>            
                <Link to="/alumni"><div className={topNav.mob[6]} onClick={() => {switchTabIndicator(6); dropDown()}} style={mobileStyle}><strong>ALUMNI</strong></div></Link>            
            </div>
        </>
    )
}

export default HomeTopNav