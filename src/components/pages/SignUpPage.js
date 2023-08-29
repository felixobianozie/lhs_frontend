/*
Log in and account creation buttons for mobile and tablet screens
*/
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";


const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[^\w\d\s]).{8,24}$/;
const FNAME_REGEX = /^[a-zA-Z-_]{2,32}$/;
const LNAME_REGEX = /^[a-zA-Z-_]{2,32}$/;
const PHONE_REGEX = /^[0-9+]{11,14}$/;

function SignUpPage() {

    document.title = 'LHS | Signup';

    const SIGNUP_URL = '/users/';

    const navigate = useNavigate();
    const [ signupData, setSignupData] = useState({
        school:"Lutheran High School Obot Idim",
        first_name: '',
        last_name: '',
    });
    const [ validData, setValidData ] = useState({});
    const [ focus, setFocus ] = useState({fName: false, lName: false, phone: false, email: false, password: false, password2: false});
    const [ success, setSuccess] = useState(false);
    const [ signupErrMsg, setSignupErrMsg ] = useState('');

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setSignupData(previous => ({...previous, [name]: value}))
    };

    useEffect(() => {
        setValidData(prev => {
            return {
                ...prev, 
                fName: FNAME_REGEX.test(signupData.first_name),
                lName: LNAME_REGEX.test(signupData.last_name),
                phone: PHONE_REGEX.test(signupData.phone),
                email: EMAIL_REGEX.test(signupData.email),
                password: PWD_REGEX.test(signupData.password),
                password2: (signupData.password ? signupData.password === signupData.password2 : false),
                joined_as: (signupData.joined_as ? true : false)
            }
        });
    }, [signupData]);

    useEffect(() => {
      setSignupErrMsg('');
    }, [signupData]);

    async function handleSignUp(event) {
        event.preventDefault();
        try {
                await axios.post(
                    SIGNUP_URL,
                    JSON.stringify(signupData),
                    {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: true
                    }
                );

            setSuccess(true);

            // Send user to login after signup
            // Signup success section uses this delay to display
            setTimeout(() => {
                setSuccess(false);
                setSignupData({});
                navigate('/login', {replace: true});
            }, 2000);

            // navigate('/login', {state: {signUp: success}});
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setSignupErrMsg("Signup Failed! Please try again later.");
                setSignupData({});
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                setSignupErrMsg('No server response. Check your internet connectivity.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setSignupErrMsg('Signup Failed! Please report this issue.');
                setSignupData({});
            }
        }
    }

    return(
        <>
            {/* Signup Success */}
            <div className={success ? "w3-padding-64 w3-animate-zoom w3-center" : "w3-hide"} style={{minHeight:'80vh'}}>
                <div className="w3-text-green w3-xxxlarge w3-pale-green w3-padding w3-border" style={{maxWidth:'350px', marginLeft:'auto', marginRight: 'auto'}}>
                    <span className="far fa-check-cirle w3-text-green w3-jumbo">&#xf058;</span>
                    <p>Account Successfully Created!</p>                    
                </div>
            </div>
            {/* Signup Form */}
            <div className={!success ? "w3-padding-32 w3-animate-zoom" : "w3-hide"} style={{minHeight:'80vh'}}>
                <div className="w3-card-2" style={{maxWidth:'350px', marginLeft:'auto', marginRight:'auto'}}>
                    <p className={signupErrMsg ? "w3-center w3-red" : "w3-hide"}>{signupErrMsg}</p>
                    <form className="w3-container" onSubmit={(e) => handleSignUp(e)}>
                        <div className="w3-section">
                            {/* First Name */}
                            <label htmlFor="fname">
                                <b>First Name</b>
                                <span className={validData.fName ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.fName && signupData.fName && !validData.fName ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="fname" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="text" 
                                placeholder="Enter your first name" 
                                name="first_name" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, fName: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, fName: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {/* Last Name */}
                            <label htmlFor="lname">
                                <b>Last Name</b>
                                <span className={validData.lName ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.lName && signupData.lName && !validData.lName ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="lname" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="text" 
                                placeholder="Enter your password" 
                                name="last_name" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, lName: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, lName: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {/* Phone Number */}
                            <label htmlFor="phone">
                                <b>Phone Number</b>
                                <span className={validData.phone ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.phone && signupData.phone && !validData.phone ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="phone" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="text" 
                                placeholder="Enter your password" 
                                name="phone" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, phone: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, phone: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {/* Email */}
                            <label htmlFor="email">
                                <b>Email</b>
                                <span className={validData.email ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.email && signupData.email && !validData.email ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="email" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="text" 
                                placeholder="Enter your email" 
                                name="email" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, email: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, email: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {/* Password */}
                            <label htmlFor="password">
                                <b>Password</b>
                                <span className={validData.password ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.password && signupData.password && !validData.password ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="password" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, password: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, password: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            <p className={focus.password && !validData.password ? "w3-small w3-text-red" : "w3-hide"}><span className="fa fa-warning"></span> 8 to 24 characters. Must contain at least one uppercase, one lower case, one number, one special character.</p>
                            {/* Password Confirmation */}
                            <label htmlFor="password2">
                                <b>Confirm Password</b>
                                <span className={validData.password2 && signupData.password2 ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={focus.password2 && signupData.password2 && !validData.password2 ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <input 
                                id="password2" 
                                className="w3-input w3-border w3-margin-bottom" 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password2" 
                                onFocus={() => setFocus(prev => {
                                    return {...prev, password2: true}
                                })}
                                onBlur={() => setFocus(prev => {
                                    return {...prev, password2: false}
                                })}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                            {/* Joined As */}
                            <label htmlFor="register">
                                <b>Register As</b>
                                <span className={validData.joined_as ? "w3-text-green" : "w3-hide"}> <i className="fa fa-check"></i></span>
                                <span className={!validData.joined_as ? "w3-text-red" : "w3-hide"}> <i className="fa fa-times"></i></span>
                            </label>
                            <select 
                                className="w3-input w3-border w3-margin-bottom" 
                                name="joined_as" 
                                id="register"
                                onChange={(e) => handleChange(e)}
                            >
                                <option value=''>--Choose an option</option>
                                <option value="staff">Staff</option>
                                <option value="guardian">Guardian or Parent</option>
                                <option value="student">Student</option>
                                <option value="alumni">Alumni</option>
                            </select>

                            <button 
                                className="w3-button w3-block w3-blue w3-padding w3-section w3-round-large" 
                                type="submit"
                                disabled = {(!validData.fName || !validData.lName || !validData.email || !validData.password || !validData.password2 || !validData.joined_as) ? true : false}
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className='w3-center w3-container w3-small'>
                        By clicking “Sign Up”, you agree to our
                        <Link to='/login'> Terms of Service </Link> 
                        and acknowledge that you have read and 
                        understand our privacy policy and code of conduct. 
                    </p>
                    <div className="w3-container w3-border-top w3-padding-16 w3-light-grey">
                        <Link to='/'><button type="button" className="w3-button w3-border w3-border-red w3-round-large w3-text-red">Cancel</button></Link>
                        <span className="w3-right w3-padding">Already have an account? <Link to='/login' className='w3-text-light-blue'>Login</Link></span>
                    </div>
                </div>
                <div className="w3-button w3-block w3-section w3-card-2 w3-round-large" style={{maxWidth:'350px', marginLeft:'auto', marginRight:'auto'}}>Signup with Google</div>
            </div>

        </>
    )
}

export default SignUpPage