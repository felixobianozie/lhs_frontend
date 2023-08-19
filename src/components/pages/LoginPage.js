/*
Log in and account creation buttons for mobile and tablet screens
*/
import { Link } from "react-router-dom"

function LoginPage() {

    return(
        <>
            <div className="w3-padding-64 w3-animate-zoom" style={{minHeight:'77vh'}}>
                <div className="w3-card-4" style={{maxWidth:'400px', marginLeft:'auto', marginRight:'auto'}}>
                    <form className="w3-container" action="/action_page.php">
                        <div className="w3-section">
                            <label><b>Email</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeHolder="example@mail.com" name="usrname" required/>
                            <label><b>Password</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="password" placeHolder="*******" name="psw" required/>
                            <button className="w3-button w3-block w3-blue w3-padding w3-section w3-round-large" type="submit">Login</button>
                        </div>
                    </form>
                    <div className='w3-center' >Dont have an account? <a href="#" className='w3-text-light-blue'>Create Account</a></div>
                    <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <Link to='/'><button type="button" className="w3-button w3-border w3-border-red w3-round-large w3-text-red">Cancel</button></Link>
                        <span className="w3-right w3-padding w3-text-red">Forgot <a href="#">Password?</a></span>
                    </div>
                </div>
                <div className="w3-button w3-block w3-section w3-card-4 w3-round-large" style={{maxWidth:'400px', marginLeft:'auto', marginRight:'auto'}}>Login with Google</div>
            </div>

        </>
    )
}

export default LoginPage