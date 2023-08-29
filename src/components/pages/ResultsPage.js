/**
 * Results
 */
import result from '../../assets/result.png'
import * as resultContent from '../../content/results'
import Section from '../Section'
import SubSection from '../SubSection'

function ResultsPage() {
    document.title = 'LHS | Results';

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${result})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"300px", marginRight:"auto", marginLeft:"auto"}}><strong>Academic Results</strong></div> 	
            </div>            
            <div className='w3-pale-yellow' style={{minHeight:'60vh'}}>
                <Section id="resultStatus" title="Availability Status">
                    <SubSection 
                        title="" 
                        content={resultContent.resultStatus}
                    />
                </Section>  
                <Section id="resultCheck" title="Check Result">
                    <SubSection 
                        title="" 
                        content={resultContent.resultCheck}
                    />
                </Section>
                <Section id="validate" title="Validate Result">
                    <SubSection 
                        title="" 
                        content={resultContent.validateResult}
                    />
                </Section>  
                <Section id="transcript" title="Generate Transcript">
                    <SubSection 
                        title="" 
                        content={resultContent.genTranscript}
                    />
                </Section>  
            </div>
        </>
    )
}

export default ResultsPage