/*
Log in and account creation buttons for mobile and tablet screens
*/
import { Link } from "react-router-dom"

function SignUpPage() {

    document.title = 'LHS | Signup';

    return(
        <>
            <div className="w3-padding-32 w3-animate-zoom" style={{minHeight:'77vh'}}>
                <div className="w3-card-2" style={{maxWidth:'400px', marginLeft:'auto', marginRight:'auto'}}>
                    <form className="w3-container" action="/action_page.php">
                        <div className="w3-section">
                            <label><b>Email</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeHolder="Enter your email" name="usrname" required/>
                            <label><b>Password</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="password" placeHolder="Enter your password" name="psw" required/>
                            <p className="w3-small">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                            <label><b>Confirm Password</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="password" placeHolder="Enter your password again" name="psw" required/>
                            <label for='register'><b>Register As</b></label>
                            <select className="w3-input w3-border w3-margin-bottom" name="cars" id="register">
                                <option value="staff">Staff</option>
                                <option value="guardian">Guardian or Parent</option>
                                <option value="student">Student</option>
                                <option value="alumni">Alumni</option>
                            </select>
                            <button className="w3-button w3-block w3-blue w3-padding w3-section w3-round-large" type="submit">Sign Up</button>
                        </div>
                    </form>
                    <p className='w3-center w3-container w3-small'>
                        By clicking “Sign Up”, you agree to our
                        <Link to='/login'> Terms of Service </Link> 
                        and acknowledge that you have read and 
                        understand our privacy policy and code of conduct. 
                    </p>
                    <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <Link to='/'><button type="button" className="w3-button w3-border w3-border-red w3-round-large w3-text-red">Cancel</button></Link>
                        <span className="w3-right w3-padding">Already have an account? <Link to='/login' className='w3-text-light-blue'>Login</Link></span>
                    </div>
                </div>
                <div className="w3-button w3-block w3-section w3-card-2 w3-round-large" style={{maxWidth:'400px', marginLeft:'auto', marginRight:'auto'}}>Signup with Google</div>
            </div>

        </>
    )
}

export default SignUpPage