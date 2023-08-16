/*
The home page
*/
import '../styles/home_nav_toggler.css'
import FlashMsg from './FlashMsg';
import SliderHome from './SliderHome';
import Facilities from './Facilities';
import AboutUs from './AboutUs';
import AcadPrograms from './AcadPrograms';
import AdmissionContact from './AdmissionContact';
import Footer from './Footer';
import SignInUpDesktop from './SignInUpDesktop';
import HomeHeader from './HomeHeader';
import HomeTopNav from './HomeTopNav';

function Home() {
    return (
        <>
            <FlashMsg/> 
            <HomeHeader/>
            <HomeTopNav/>
            <SliderHome/>
            <SignInUpDesktop/>
            <Facilities/>
            <AboutUs/>
            <AcadPrograms/>
            <AdmissionContact/>
            <Footer/>
        </>
    )
}

export default Home