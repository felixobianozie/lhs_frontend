/*
The home page
*/
import SliderHome from '../SliderHome';
import Facilities from '../Facilities';
import AboutUs from '../AboutUs';
import AcadPrograms from '../AcadPrograms';
import AdmissionContact from '../AdmissionContact';
import SignInUpDesktop from '../SignInUpDesktop';

function Home() {
    return (
        <> 
            <SliderHome/>
            <SignInUpDesktop/>
            <Facilities/>
            <AboutUs/>
            <AcadPrograms/>
            <AdmissionContact/>
        </>
    )
}

export default Home