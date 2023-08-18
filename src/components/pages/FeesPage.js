/**
 * Fees
 */
import payment from '../../assets/payment.png'

function FeesPage() {

    return (
        <>
            <div className="w3-xxlarge w3-center w3-padding-64 w3-text-white w3-cursive" style={{height:'200px', backgroundImage:`url(${payment})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
                <div className="w3-black w3-circle w3-padding-16" style={{width:"300px", marginRight:"auto", marginLeft:"auto"}}><strong>Fees & Payments</strong></div> 	
            </div>            
            <div className='w3-light-gray w3-container' style={{minHeight:'60vh'}}>
                <div>Below is a breakdown our current fees and payments for 2023/2024 academic session.</div>
            </div>
        </>
    )
}

export default FeesPage