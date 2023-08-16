/*
Facilities section of the home page
*/
import SectionHeader from "./SectionHeader"
import FacilityCards from "./FacilityCards"
import ict from '../assets/ict_lab.jpg'
import library from "../assets/library.jpg"
import hostel from "../assets/hostel.jpg"
import staff from "../assets/staff.jpg"
import convenience from "../assets/convenience.jpg"
import research_center from "../assets/resource_center.jpg"

function Facilities(){
    const abtICT = "We have well equiped ICT laboratories with enough \
    computers for each student";
    const abtLibrary = "A standard library with a complete set of resources  \
    for all our student needs"
    const abtHostel = "There is a complete, state of the arts hostel accommodation  \
    for all boarding students"
    const abtConvenience = "Top rated convenience facilities available to students, staff  \
    and all our esteemed visitors"
    const abtResearchCenter = "Research center, with modern equipments for all science  \
    research and college experiments"
    const abtStaff = "We pride in the bests, with grand experience  \
    very agile and dedicated to your child's success"


    return(
        <div className='w3-containter w3-sand'>
            <SectionHeader name="OUR FACILITIES" />
            <div className='w3-container w3-row'>
                <FacilityCards name="ICT Laboratory" desc = {abtICT} photo={ict}/>
                <FacilityCards name="Library" desc={abtLibrary} photo={library}/>
                <FacilityCards name="Hostel Accommodation" desc={abtHostel} photo={hostel}/>
                <FacilityCards name="Hygenic Convenience" desc={abtConvenience} photo={convenience}/>
                <FacilityCards name="Research Center" desc={abtResearchCenter} photo={research_center}/>
                <FacilityCards name="Qualified Staff" desc={abtStaff} photo={staff}/>
            </div>
        </div>
    )
}

export default Facilities