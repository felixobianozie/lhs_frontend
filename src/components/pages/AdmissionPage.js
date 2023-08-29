/**
 * Admissions
 */
import admission from '../../assets/admission.jpg';
import * as admissionContent from '../../content/admission';
import Section from '../Section';
import SubSection from '../SubSection';

function AdmissionPage() {
    document.title = 'LHS | Admission';

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${admission})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"200px", marginRight:"auto", marginLeft:"auto"}}><strong>Admission</strong></div> 	
            </div>            
            <div className='w3-pale-yellow' style={{minHeight:'60vh'}}>
                <Section id="admission" title="Admission Status">
                    <SubSection 
                        title="" 
                        content={admissionContent.admissionStatus}
                    />
                </Section>   
                <Section id="form" title="Application Process">
                    <SubSection 
                        title="" 
                        content={admissionContent.applicationProcess}
                    />
                </Section> 
                <Section id="process" title="Fill Admission Form">
                    <SubSection 
                        title="" 
                        content={admissionContent.admissionForm}
                    />
                </Section> 
                <Section id="exam" title="Entrance Examination Dates">
                    <SubSection 
                        title="" 
                        content={admissionContent.entranceExamDates}
                    />
                </Section> 
                <Section id="entranceResult" title="Check Entrance Examination Result">
                    <SubSection 
                        title="" 
                        content={admissionContent.entranceExamResults}
                    />
                </Section> 
            </div>
        </>
    )
}

export default AdmissionPage