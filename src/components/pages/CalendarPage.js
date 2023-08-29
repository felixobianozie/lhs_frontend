/**
 * Events and School Calendar
 */

import events from '../../assets/events.png';
import *  as calendarContent from '../../content/calendar'
import Section from '../Section';
import SubSection from '../SubSection';

function CalendarPage() {
    document.title = 'LHS | Notice';

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${events})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"350px", marginRight:"auto", marginLeft:"auto"}}><strong>Events & Calendar</strong></div> 	
            </div>            
            <div className='w3-sand' style={{minHeight:'60vh'}}>
                <Section id="calendar" title="2023/2024 School Calendar">
                    <SubSection 
                        title="" 
                        content={calendarContent.calendar}
                    />
                </Section>  
                <Section id="upEvents" title="Upcoming Events">
                    <SubSection 
                        title="" 
                        content={calendarContent.upEvents}
                    />
                </Section> 
                <Section id="pastEvents" title="Past Events">
                    <SubSection 
                        title="" 
                        content={calendarContent.pastEvents}
                    />
                </Section> 
            </div>
        </>
    )
}

export default CalendarPage