import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import registarImg from '../../images/Login-rafiki.svg'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Sheard/Loading';
import useToken from '../../hooks/UseToken';
import signUp from './signUp.css';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();

    // Sign Up with Google.
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    // create user with Email and Password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // Sign up with Facebook.
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    const [token] = useToken(user || Guser || Fuser)


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
                <div className='col-lg-6 col-sm-12 Image d-flex justify-content-center'>
                    <img src={registarImg} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12'>
                    <div class="forms-container mt-5">
                        <div class="signin-signup">
                            <form action="#" class="formControl sign-in-form">
                                <h2 class="title">REGISTER</h2>
                                <div class="input-field">
                                    <i class="fas fa-user"></i>
                                    <input type="text" placeholder="Name" />
                                </div>
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
                                <Button onClick={() => createUserWithEmailAndPassword(email, password)} className='px-5' variant="outline-primary">CREATE</Button>{' '}
                                <p class="social-text">Already Have a Account <Link to={'/Login'}>Login</Link></p>
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

export default SignUp;