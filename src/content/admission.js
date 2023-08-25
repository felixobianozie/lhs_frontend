import { Link } from 'react-router-dom';
import { showUnderDev } from '../components/modals/UnderDevModal';

// Admission Status
export const admissionStatus = (
    <>
        <p>
            Admision for 2023/2024 academic session is currently: <span className="w3-tag w3-green felix-animate-fading">ONGOING</span>
        </p>
    </>
);

// Application Process
export const applicationProcess = (
    <>
        
        <ol>
            <li><b>GET ADMISSION FORM:</b> Our application forms into JS1, JSS2, SS1 and SS2 sales at a non-refundable fee of ₦3,000. The application form can be filled and submitted ONLINE or PHYSICALLY. The physical forms are available at the school premises and other locations that may be designated by the school management. For online forms, you are required to pay, fill and submit here on our website from the comfort of your location. After filling and submitting the form, our administrative staff will schedule you for an entrance examination and you will be notified. See section below on <b><code>"Fill Admision Form"</code></b> for details. </li>
            <br/>
            <li><b>SIT FOR ENTRANCE EXAMINATION:</b> You will be required to sit for entrance examination on your scheduled date at the school premises. Our online entrance examination is temporarily not available.</li>
            <br/>
            <li><b>AWAIT EXAMINATION RESULT:</b> Result is usually available within a few days of the examination. You may check the result here on our website or at the school's physical notice boards. Successful candidates are always notified. To check entrance examination results, see section below on <code><b>"Check Entrance Examination Result"</b></code>.</li>
            <br/>
            <li><b>CONDITIONAL ADMISSION:</b> Candidates who passed the entrance examination will be offered a conditional admission pending acceptance.</li>
            <br/>
            <li><b>ACCEPTANCE FEE:</b> You are required to pay a non-refundable acceptance fee of ₦3,000. Payment automatically validates candidates's admission. Only then are you officially considered admitted and eligible to proceed to school fees payment and other levies as applicable. This payment can be made automatically from our website with your ATM card details. See section below on <code><b>"Check Entrance Examination Result"</b></code> for acceptance fee payment link.</li>
            <br/>
            <li><b>CONGRATULATIONS:</b> If you reached this stage, then congratulations, your admission is validated! Student may proceed to make all other applicable students payments. <Link to='/fees'>Click here to see our updated fees and other levies.</Link> For futher questions visit us or reach us through our contact links.</li>
        </ol>
    
    </>
);

// Fill Admission Form
export const admissionForm = (
    <>
        <p>
            <b>PHYSICAL FORMS:</b> Our physical admission forms for the 2023/2024 academic session are currently available only at school premises at a fee of ₦3,000. The money may be paid over the counter at the point of getting the form or paid to our school bank account as follows:
        </p>
        <blockquote>
        Lutheran High School, Obot Idim<br/>
        0107355105<br/>
        GTBank
        </blockquote>
        <blockquote>
        Lutheran High School, Obot Idim<br/>
        1011112061<br/>
        Zenith Bank
        </blockquote>
        <p>
            You are required to come with your evidence of payment if you took this option.
        </p>
        <p>
            <b>ONLINE FORMS:</b> Our online admission form filling is very fast and secure. It comes highly recommended over physical stress. First you would fill the form, upon submission, you would be routed to our payment portal where you would make payment of ₦3,000 using your ATM card at the convenience of your current location. Upon successful payment, the form would automatically be submitted to us and we would contact you for an entrance examination date.
        </p>
        
        <div
        className='w3-button w3-blue w3-round-large' 
        onClick = {() => showUnderDev()}
        >
            Fill Form Now
        </div>
        <p></p>
    </>
);

// Entrance Examination Dates
export const entranceExamDates = (
    <>
        <p>
            Our entrance examinations are scheduled with our candidates in mind. We try to keep it as flexible as possible, spread accross different dates to suit your needs. Your examination date may fall into any of the dates listed based on the day you submitted your admission form online or physically. This section is instantly updated each time our schedules change. 
        </p>
        <table className="w3-table-all">
            <caption><strong>2023/2024 Entrance Examination Schedule</strong></caption>
            <thead> 
                <tr>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sat. 5th Aug.</td>
                    <td>School Premises</td>
                    <td><span className='w3-tag w3-green'>&#10003;</span></td>
                </tr>
                <tr>
                    <td>Sat. 12 Aug. </td>
                    <td>School Premises</td>
                    <td><span className='w3-tag w3-green'>&#10003;</span></td>
                </tr>
                <tr>
                    <td>Sat. 19 Aug. </td>
                    <td>School Premises</td>
                    <td><span className='w3-tag w3-green'>&#10003;</span></td>
                </tr>
                <tr>
                    <td>Sat. 26 Aug. </td>
                    <td>School Premises</td>
                    <td><span className='w3-tag w3-yellow'>...</span></td>
                </tr>
                <tr>
                    <td>Sat. 2 Sept. </td>
                    <td>School Premises</td>
                    <td><span className='w3-tag w3-yellow'>...</span></td>
                </tr>
            </tbody>
        </table>
        <p>
        <span className='w3-tag w3-green'>&#10003;</span> - Successfully conducted
        </p>
        <p>
        <span className='w3-tag w3-yellow'>...</span> - Still in view
        </p>
        <p>
        <span className='w3-tag w3-red'>x</span> - Cancelled or postponed
        </p>
    </>
);

// Check Entrance Examination Results
export const entranceExamResults = (
    <>
        <p>
            For all dates on our schedule, availability status and results can be found here. For successful candidates you may proceed to pay acceptance fee here on our website using our fast and secure payment service or through other payment means to our school bank account. For details see the section above on <code><b>"Application Process".</b></code>
        </p>
        <table className="w3-table-all">
            <caption><strong> Check 2023/2024 Entrance Examination Results</strong></caption>
            <thead>
                <tr>
                    <th>Exam Date</th>
                    <th colSpan='2'>Availbility</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sat. 5th Aug.</td>
                    <td><span className='w3-tag w3-green'>&#10003;</span></td>
                    <td><div className='w3-button w3-blue w3-round-large w3-small' onClick = {() => showUnderDev()}>Check Result</div></td>
                </tr>
                <tr>
                    <td>Sat. 12 Aug. </td>
                    <td><span className='w3-tag w3-green'>&#10003;</span></td>
                    <td><div className='w3-button w3-blue w3-round-large w3-small' onClick = {() => showUnderDev()}>Check Result</div></td>            
                </tr>
                <tr>
                    <td>Sat. 19 Aug. </td>
                    <td><span className='w3-tag w3-yellow'>...</span></td>
                    <td><div className='w3-button w3-blue w3-round-large w3-small' onClick = {() => showUnderDev()}>Check Result</div></td>            
                </tr>
                <tr>
                    <td>Sat. 26 Aug. </td>
                    <td><span className='w3-tag w3-red'>x</span></td>
                    <td><div className='w3-button w3-blue w3-round-large w3-small' onClick = {() => showUnderDev()}>Check Result</div></td>
                </tr>
                <tr>
                    <td>Sat. 2 Sept. </td>
                    <td><span className='w3-tag w3-red'>x</span></td>
                    <td><div className='w3-button w3-blue w3-round-large w3-small' onClick = {() => showUnderDev()}>Check Result</div></td>
                </tr>
            </tbody>
        </table>
        <p>
        <span className='w3-tag w3-green'>&#10003;</span> - Result available for checking
        </p>
        <p>
        <span className='w3-tag w3-yellow'>...</span> - Result is not yet publised
        </p>
        <p>
        <span className='w3-tag w3-red'>x</span> - Exam has not been taken
        </p>
    </>
);