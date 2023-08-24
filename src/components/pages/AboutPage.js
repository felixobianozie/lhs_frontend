/**
 * About us page
 */
import about from '../../assets/about.png';
import * as aboutContent from '../../content/about'
import Section from '../Section';
import SubSection from '../SubSection';

function AboutPage() {

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${about})`, backgroundRepeat:"no-repeat", backgroundPosition:"center center"}}>
                <div><strong>About Us</strong></div> 	
            </div>
            <div className='w3-sand' style={{minHeight:'60vh'}}>
                <Section id="history" title="School History">
                    <SubSection 
                        title="How it all started" 
                        content={aboutContent.howItAllStarted}
                    />
                    <SubSection 
                        title="Academic Records & Standard" 
                        content={aboutContent.academicRecords}
                    />
                    <SubSection 
                        title="Dormitory Life" 
                        content={aboutContent.dormitoryLife}
                    />
                    <SubSection 
                        title="Areas Of Significant Performance" 
                        content={aboutContent.areasOfSignificantPerformance}
                    />
                    <SubSection 
                        title="Houses & Colours" 
                        content={aboutContent.housesAndColours}
                    />
                    <SubSection 
                        title="Trend Assessment" 
                        content={aboutContent.trendsAssessment}
                    />
                    <SubSection 
                        title="Chronicles of Principals 1950 - 2010" 
                        content={aboutContent.chroniclesOfPrincipals}
                    />
                    <SubSection 
                        title="Facts File" 
                        content={aboutContent.factsFile}
                    />
                    <SubSection 
                        title="Other Landmark" 
                        content={aboutContent.otherLandMarks}
                    />
                    <SubSection 
                        title="Credits and References" 
                        content={aboutContent.creditsAndReferences}
                    />
                </Section>

                <Section id="m&v" title="Mission & Vission">
                    <SubSection 
                        title="Mission" 
                        content={aboutContent.mission}
                    />
                    <SubSection 
                        title="Vission" 
                        content={aboutContent.vision}
                    />
                </Section>

                <Section id="a&p" title="Anthem & Pledge">
                    <SubSection 
                        title="School Anthem" 
                        content={aboutContent.anthem}
                    />
                    <SubSection 
                        title="School Pledge" 
                        content={aboutContent.pledge}
                    />
                </Section>
                
                <Section id="board" title="Board of Governors">
                    <SubSection 
                        title="" 
                        content={aboutContent.board}
                    />
                </Section>
                
                <Section id="mgt" title="Management Staff">
                    <SubSection 
                        title="" 
                        content={aboutContent.mgtStaff}
                    />
                </Section>
                
                <Section id="t&l" title="Our Teaching & Learning Approaches">
                    <SubSection 
                        title="" 
                        content={aboutContent.teachingLearning}
                    />
                </Section>

                <Section id="why" title="20 Reasons Why Your Child Belongs Here!">
                    <SubSection 
                        title="" 
                        content={aboutContent.whyUs}
                    />
                </Section>                
            </div>
        </>
    )
}

export default AboutPage