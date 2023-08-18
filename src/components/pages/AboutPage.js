/**
 * About us page
 */
import about from '../../assets/about.png';

function AboutPage() {

    const myStyle = {marginBottom:'3px'};
    const myBtnClass = "w3-button w3-block w3-left-align w3-card-2";

    function dropTogler(id) {
        let x = document.getElementById(id);
        if (x.className.indexOf("w3-show") === -1) {
          x.className += " w3-show";
        } else { 
          x.className = x.className.replace(" w3-show", "");
        }
    }

    function dropArrowTogler(id) {
        let x = document.getElementsByClassName(id);
        for (let i = 0; i < 2; i++) {
            if (x[i].className.indexOf("w3-hide") === -1) {
                x[i].className += " w3-hide";
            } else { 
            x[i].className = x[i].className.replace(" w3-hide", "");
            }
        }

    }

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${about})`, backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                <div><strong>About Us</strong></div> 	
            </div>
            <div className='w3-sand' style={{minHeight:'60vh'}}>
                <button onClick={() => {dropTogler('history'); dropArrowTogler('historyArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>School History</strong>
                    <div className="w3-right historyArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right historyArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="history" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('m&v'); dropArrowTogler('m&vArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Mission & Vission</strong>
                    <div className="w3-right m&vArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right m&vArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="m&v" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('a&p'); dropArrowTogler('a&pArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Anthem & Pledge</strong>
                    <div className="w3-right a&pArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right a&pArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="a&p" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('board'); dropArrowTogler('boardArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Board of Governors</strong>
                    <div className="w3-right boardArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right boardArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="board" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('mgt'); dropArrowTogler('mgtArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Management Staff</strong>
                    <div className="w3-right mgtArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right mgtArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="mgt" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('t&l'); dropArrowTogler('t&lArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Our Teaching & Learning Styles</strong>
                    <div className="w3-right t&lArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right t&lArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="t&l" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('whyUs'); dropArrowTogler('whyUsArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>See Why Your Child Belongs Here!</strong>
                    <div className="w3-right whyUsArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right whyUsArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="whyUs" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutPage