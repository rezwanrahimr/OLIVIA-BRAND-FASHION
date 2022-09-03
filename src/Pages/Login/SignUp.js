import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import registarImg from '../../images/Login-rafiki.svg'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const navigate = useNavigate();

    // create user with Email and Password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate('/Home')
    }
    return (
        <div className="containerr" >
            <div class="forms-container">
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
                        <Button onClick={() => createUserWithEmailAndPassword(email, password)} className='px-5' variant="outline-primary">CREATE</Button>{' '}
                        <p class="social-text">Or Sign in with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>ALREADY HAVE A ACCOUNT ?</h3>
                        <p>
                            SIGN IN BELOW USING YOUR CAPIE 5 DEMO INFORMATION.
                        </p>
                        <Link to='/Login'><Button class="LoginButtontransparent" id="sign-up-btn" variant="primary">SIGN-IN</Button>{' '}</Link>
                    </div>
                    <img src={registarImg} class="image" alt="" />
                </div>
            </div>
        </div>

    );
};

export default SignUp;