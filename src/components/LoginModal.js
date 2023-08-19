/**
 * Login Modal
 */
import { Link } from 'react-router-dom';
import login from '../assets/header_logo.png'

function LoginModal() {

    // This function is to be assigned to any component intended to display this modal on click
    //
    // function showModal(id) {
    //     document.getElementById(id).style.display='block';
    // }
    //
    // showModal('loginModal')

    function hideModal(id) {
        document.getElementById(id).style.display='none';
    }

    return (
        <>
            <div id="loginModal" class="w3-modal">
                <div className="w3-modal-content w3-card-4 w3-animate-zoom" style={{maxWidth:'400px'}}>
                    <div className="w3-center"><br/>
                        <span onClick={() => hideModal('loginModal')} className="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                        <img src={login} alt="Avatar" style={{width:'15%'}} className="w3-circle w3-margin-top"/>
                    </div>

                    <form className="w3-container" action="/action_page.php">
                        <div className="w3-section">
                            <label><b>Email</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="text" placeHolder="Enter Username" name="usrname" required/>
                            <label><b>Password</b></label>
                            <input className="w3-input w3-border w3-margin-bottom" type="password" placeHolder="Enter Password" name="psw" required/>
                            <button className="w3-button w3-block w3-blue w3-padding w3-section w3-round-large" type="submit">Login</button>
                        </div>
                    </form>
                    <div className='w3-center' >Dont have an account? <Link to="/signup" className='w3-text-light-blue'>Create Account</Link></div>
                    <div class="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <button onClick={() => hideModal('loginModal')} type="button" className="w3-button w3-border w3-border-red w3-round-large">Cancel</button>
                        <span className="w3-right w3-padding">Forgot password?</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginModal