/*
The home page
*/
import SliderHome from '../SliderHome';
import Facilities from '../Facilities';
import AboutUs from '../AboutUs';
import AcadPrograms from '../AcadPrograms';
import AdmissionContact from '../AdmissionContact';
import SignInUpDesktop from '../SignInUpDesktop';
import LoginModal from '../LoginModal';

function Home() {
    return (
        <>
            <SliderHome/>
            <SignInUpDesktop/>
            <LoginModal />
            <Facilities/>
            <AboutUs/>
            <AcadPrograms/>
            <AdmissionContact/>
        </>
    )
}

export default Home