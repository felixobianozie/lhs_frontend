/*
Log in and account creation buttons for mobile and tablet screens
*/
import { Link } from "react-router-dom"

function SignInUpDesktop() {

    return(
        <div className='w3-container w3-padding-16 w3-black w3-hide-small w3-hide-medium w3-animate-left'>
            <div className='w3-left '>Experience our state of the arts, AI enabled, school digital assitant & application.</div>
            <div className='w3-right' style={{maxWidth:"300px"}}>
                <div>
                    <strong>
                        <Link to='login'><div className='w3-button w3-round-large w3-orange w3-margin-right w3-small'>Log In</div></Link>
                        <Link to='signup'><div className='w3-button w3-round-large w3-blue w3-small'>Create Account</div></Link>                        
                    </strong>
                </div>
            </div>
        </div>        
    )
}

export default SignInUpDesktop