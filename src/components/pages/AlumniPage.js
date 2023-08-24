/**
 * Alumni
 */

import alumni from '../../assets/alumni.png'
import * as alumniContent from '../../content/alumni'
import Section from '../Section';
import SubSection from '../SubSection';

function AlumniPage() {

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${alumni})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"200px", marginRight:"auto", marginLeft:"auto"}}><strong>Alumni</strong></div>
            </div>            
            <div className='w3-sand' style={{minHeight:'60vh'}}>
                <Section id="alumLeadership" title="Alumni Leadership (International)">
                    <SubSection 
                        title="" 
                        content={alumniContent.alumLeadership}
                    />
                </Section> 
                <Section id="alumProjects" title="Alumni Projects">
                    <SubSection 
                        title="" 
                        content={alumniContent.alumProjects}
                    />
                </Section> 
                <Section id="alumChronicles" title="Alumni Chronicles 1950 - 2023">
                    <SubSection 
                        title="" 
                        content={alumniContent.alumChronicles}
                    />
                </Section> 
            </div>
        </>
    )
}

export default AlumniPage