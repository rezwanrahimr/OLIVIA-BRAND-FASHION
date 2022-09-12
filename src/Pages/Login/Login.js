import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from './login.css';
import IMG from '../../images/Fashion blogging-pana.svg';
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Sheard/Loading';
import useToken from '../../hooks/UseToken';
import { toast } from 'react-toastify';



const Login = () => {
    const navigate = useNavigate();

    // Sign Up with Google.
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    // user login with email and password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    // Sign up with Facebook.
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    const [token] = useToken(user || Guser || Fuser);

    if (error) {
        toast.error(error.message);
    }
    if (loading || Gloading || Floading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/Home')
    }

    return (
        <div>
            <div className='row'>
                <div className='col-lg-6 col-sm-10 Image d-flex justify-content-center'>
                    <img src={IMG} width="100%" alt="" />
                </div>
                <div className='col-lg-6 col-sm-10'>
                    <div class="forms-container mt-5">
                        <div class="signin-signup">
                            <form action="#" class="formControl sign-in-form">
                                <h2 class="title">SIGN IN</h2>
                                <div class="input-field">
                                    <i class="fas fa-user"></i>
                                    <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Username" />
                                </div>
                                <div class="input-field">
                                    <i class="fas fa-lock"></i>
                                    <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                </div>
                                {
                                    error || Gerror || Ferror ? <p className='text-danger'>{error.message || Gerror.message || Ferror.message}</p> : ''
                                }
                                <Button className='px-5' variant="outline-primary" onClick={() => signInWithEmailAndPassword(email, password)}>LOGIN</Button>{' '}
                                <p class="social-text">Create Account : <Link to={'/SignUp'}>SIGN-UP</Link></p>
                                <div class="social-media">
                                    <a href="#" onClick={() => signInWithFacebook(email, password)} class="social-icon">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" class="social-icon">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" onClick={() => signInWithGoogle(email, password)} class="social-icon">
                                        <i class="fab fa-google"></i>
                                    </a>
                                    <a href="#" class="social-icon">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;