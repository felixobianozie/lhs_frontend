/*
Main slider on the home page
*/

import { useState, useEffect } from 'react';
import one from '../assets/school_gate.jpg';
import two from '../assets/students_research.jpg';
import three from '../assets/school_girls_football.jpg';

import onem from '../assets/mschool_gate.jpg'
import twom from '../assets/mstudents_research.jpg';
import threem from '../assets/mschool_girls_football.jpg';

import logo from '../assets/lhs_logo.png';
import SliderIndicatorHome from './SliderIndicatorHome';

function SliderHome() {
  const images = [
    one, two, three
  ]
  const mobile = [
    onem, twom, threem
  ]
  const [slideIndex, setSlideIndex] = useState(0);

  function manageIndex(slideIndex) {
    if (slideIndex > images.length - 1) {
      return 0
    }
    if (slideIndex < 0) {
      return images.length - 1
    }
    return slideIndex
  }

  const plusDivs = (n) => {
    setSlideIndex(previousState => {
      let newState = previousState + n;
      newState = manageIndex(newState);
      return newState
    });
  }

  const currentDiv = (n) => {
    setSlideIndex(() => {
      return manageIndex(n)
    });
  }
  useEffect(() => {
    const interval = setInterval(() => {plusDivs(1)}, 10000)
    return () => clearInterval(interval)
  })


  return (
    <div className="w3-content w3-display-container w3-black" style={{maxWidth:"100%", backgroundImage:`url(${logo})`, backgroundRepeat:"no-repeat", backgroundPosition:"center center", backgroundSize:"200px"}}>
      
      <picture className='felix-animate-opacity' key={slideIndex}>
        <source srcSet={mobile[slideIndex]} media="(max-width: 600px)" style={{maxWidth:"100%", minHeight:"230px"}} />
        {/* <source srcset={mobile[slideIndex]} media="(max-width: 992px)"/> */}
        <img src={images[slideIndex]} alt="school carousal" style={{maxWidth:"100%", minHeight:"230px"}}/>
      </picture>

      {/* Slider shift pointer for desktop */}
      <div className="w3-container w3-xxlarge w3-text-blue w3-hide-small w3-hide-medium" style={{maxWidth:"100%"}}>
        <div className="w3-display-left w3-padding w3-hover-text-khaki" style={{cursor:"pointer"}} onClick={() => plusDivs(-1)}>&#10094;</div>
        <div className="w3-display-right w3-padding w3-hover-text-khaki" style={{cursor:"pointer"}} onClick={() => plusDivs(1)}>&#10095;</div>
      </div>
      
      <SliderIndicatorHome currentDiv={currentDiv} slideIndex={slideIndex} plusDivs={plusDivs} />
    </div>
  )
}

export default SliderHome