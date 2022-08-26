import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from './login.css';
import IMG from '../../images/Fashion blogging-pana.svg';
import { Button } from 'react-bootstrap';


const Login = () => {
    
    return (
        <div className="containerr" >
            <div class="forms-container">
                <div class="signin-signup">
                    <form action="#" class="formControl sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Button className='px-5' variant="outline-primary">Login</Button>{' '}
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
                        <h3></h3>
                        <p>
                            
                        </p>
                        <Link to='/signUP'><Button  class="LoginButtontransparent" id="sign-up-btn" variant="primary">Sign-up</Button>{' '}</Link>
                    </div>
                    <img src={IMG} class="image" alt="" />
                </div>
                
            </div>
        </div>

    );
};

export default Login;