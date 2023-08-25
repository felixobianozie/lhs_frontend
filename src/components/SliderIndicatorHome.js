/*
Dot indicators on the main slider of the home page
*/
import SliderText from './SliderText'

function SliderHomeIndicator({slideIndex, currentDiv, plusDivs}) {
    const inactive = "w3-badge w3-border w3-border-blue w3-transparent w3-hover-blue";
    const active = "w3-badge w3-border w3-border-blue w3-transparent w3-hover-white w3-blue";

    let indicatorClasses = [inactive, inactive, inactive];

    const switchIndicator = () => {          
            for (let i = 0; i < indicatorClasses.length; i++){
                if (i === slideIndex){
                    indicatorClasses[i] = active;
                } else {
                    indicatorClasses[i] = inactive;
                }
            }
        }
    switchIndicator();

    return(
        <>
            {/* Slider shift pointer for mobile and tablet */}
            <div className='w3-hide-large'>
                <div className="w3-display-bottomleft w3-padding w3-hover-text-khaki w3-xlarge w3-text-blue" style={{cursor:"pointer"}} onClick={() => plusDivs(-1)}>&#10094;</div>
                <div className="w3-display-bottomright w3-padding w3-hover-text-khaki w3-xlarge w3-text-blue" style={{cursor:"pointer"}} onClick={() => plusDivs(1)}>&#10095;</div>
            </div>

            <div className="w3-center w3-section w3-display-bottommiddle" style={{width:'89%'}}>
                <SliderText slideIndex={slideIndex} />       
                <span className={indicatorClasses[0]} onClick={() => currentDiv(0)}></span>
                <span className={indicatorClasses[1]} onClick={() => currentDiv(1)}></span>
                <span className={indicatorClasses[2]} onClick={() => currentDiv(2)}></span>
            </div>
        </>
    )
  }
  
  export default SliderHomeIndicator