/*
Log in and account creation buttons for mobile and tablet screens
*/

import { Link } from "react-router-dom"

function SignInUpMobile() {
    return(
        <div className='w3-right w3-container w3-hide-large w3-animate-top' style={{marginTop: "5px"}}>
            <strong>
            <Link to='login'><div className='w3-button w3-round-large w3-orange w3-margin-right w3-small'>Log In</div></Link>
            <Link to='signup'><div className='w3-button w3-round-large w3-blue w3-small'>Create Account</div></Link>                        
            </strong>
        </div>  
    )
}

export default SignInUpMobile