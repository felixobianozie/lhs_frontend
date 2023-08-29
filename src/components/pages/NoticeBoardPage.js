/**
 * Events and School Calendar
 */

import events from '../../assets/events.png';
import *  as noticeContent from '../../content/notice';
import Section from '../Section';
import SubSection from '../SubSection';

function NoticeBoardPage() {
    document.title = 'LHS | Notice';

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${events})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"350px", marginRight:"auto", marginLeft:"auto"}}><strong>Notice Board</strong></div> 	
            </div>            
            <div className='w3-sand' style={{minHeight:'60vh'}}>
                <Section id="announcements" title="Announcements">
                    <SubSection 
                        title="" 
                        content={noticeContent.announcements}
                    />
                </Section>  
                <Section id="calendar" title="2023/2024 School Calendar">
                    <SubSection 
                        title="" 
                        content={noticeContent.calendar}
                    />
                </Section>  
                <Section id="upEvents" title="Upcoming Events">
                    <SubSection 
                        title="" 
                        content={noticeContent.upEvents}
                    />
                </Section> 
                <Section id="pastEvents" title="Past Events">
                    <SubSection 
                        title="" 
                        content={noticeContent.pastEvents}
                    />
                </Section> 
            </div>
        </>
    )
}

export default NoticeBoardPage