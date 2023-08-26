/*
Log in and account creation buttons for mobile and tablet screens
*/
import { useEffect, useState, useRef} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom"
import axios from '../../api/axios'
import useAuth from "../../hooks/useAuth";

const LOGIN_URL = '/token/';

function LoginPage() {
    const { auth, setAuth } = useAuth();
    const  emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const [inputs, setInputs] = useState({});
    const [errMsg, setErrMsg] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify(inputs),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            setAuth({ email: inputs?.email, password: inputs?.password,  accessToken: response?.data?.access, isAuthenticated: true});
            setInputs({...inputs, email:'', password:''});
            console.log(JSON.stringify(auth)); // just for testing purposes only
            navigate(from, {replace: true});
            
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (error?.response?.status === 401){
                    setErrMsg('Incorrect username or password');
                } else if (error?.response?.status === 400){
                    setErrMsg('Missing username or password');
                } else {
                    setErrMsg('Unknown error! Please try again later.');
                }
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                setErrMsg('No server response. Check your internet connectivity.');
              } else {
                // Something happened in setting up the request that triggered an Error
                setErrMsg('Login Failed! Please try again later.');
              }
        }
    }
    
    useEffect(() => {
      setErrMsg('');
    }, [inputs])
    
    document.title = 'LHS | Login';

    return(
        <>
            <div className="w3-padding-64 w3-animate-zoom w3-margin-top" style={{minHeight:'80vh'}}>
                <div className="w3-card-2 w3-margin-top" style={{maxWidth:'350px', marginLeft:'auto', marginRight:'auto'}}>
                    <p className={errMsg ? "w3-center w3-red" : "w3-hide"}>{errMsg}</p>
                    <form className="w3-container" action="/action_page.php" onSubmit={handleSubmit}>
                        <div className="w3-section">
                            <label><b>Email</b></label>
                            <input 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="text" 
                                ref={emailRef}
                                placeholder="example@mail.com" 
                                name="email"
                                value={inputs['email'] || ""}
                                required
                                onChange={(e) => {handleChange(e)}}
                            />
                            <label><b>Password</b></label>
                            <input 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="password" 
                                placeholder="Enter secret password"
                                autoComplete="off" 
                                name="password" 
                                value={inputs['password'] || ""}
                                required
                                onChange={(e) => {handleChange(e)}}
                                />
                            <button className="w3-button w3-block w3-blue w3-padding w3-section w3-round-large" type="submit">Login</button>
                        </div>
                    </form>
                    <div className='w3-center' >Dont have an account? <Link to="/signup" className='w3-text-light-blue'>Create Account</Link></div>
                    <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <Link to='/'><button type="button" className="w3-button w3-border w3-border-red w3-round-large w3-text-red">Cancel</button></Link>
                        <span className="w3-right w3-padding w3-text-red">Forgot Password?</span>
                    </div>
                </div>
                <div className="w3-button w3-block w3-section w3-card-2 w3-round-large" style={{maxWidth:'350px', marginLeft:'auto', marginRight:'auto'}}>Login with Google</div>
            </div>
        </>
    )
}

export default LoginPage