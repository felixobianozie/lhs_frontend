/**
 * Results
 */
import result from '../../assets/result.png'

function ResultsPage() {

    const myStyle = {marginBottom:'3px'}
    const myBtnClass = "w3-button w3-block w3-left-align w3-card-2"

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
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${result})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"300px", marginRight:"auto", marginLeft:"auto"}}><strong>Academic Results</strong></div> 	
            </div>            
            <div className='w3-pale-yellow' style={{minHeight:'60vh'}}>
                <button onClick={() => {dropTogler('status'); dropArrowTogler('statusArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Availability Status</strong>
                    <div className="w3-right statusArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right statusArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="status" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('process'); dropArrowTogler('processArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Check Result</strong>
                    <div className="w3-right processArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right processArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="process" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('form'); dropArrowTogler('formArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Validate Result</strong>
                    <div className="w3-right formArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right formArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="form" className="w3-hide w3-container">
                    <p>You can use any HTML element to open the accordion content. 
                        We prefer a button with a w3-block class, because it spans the 
                        entire width of its parent element, just like the accordion content 
                        (100% width). Remember that buttons in W3.CSS are centered by default. 
                        Use the w3-left-align class if you want them left aligned instead. 
                        However, you do not have to follow our approach.
                    </p>
                </div>
                <button onClick={() => {dropTogler('transcript'); dropArrowTogler('transcriptArrow')}} className={myBtnClass} style={myStyle}>
                    <strong>Generate Transcript</strong>
                    <div className="w3-right transcriptArrow"><strong>&#8595;</strong></div>
                    <div className="w3-right transcriptArrow w3-hide"><strong>&#8593;</strong></div>
                </button>
                <div id="transcript" className="w3-hide w3-container">
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

export default ResultsPage