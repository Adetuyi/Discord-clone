import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/selectors';

import { Wrapper } from './Login.styles';

import BrandName from '../../components/BrandName';

import { useModal } from '../../hooks/useModalWarning';

function Login() {
	const login = useRef();
	const isLoggedIn = useSelector(getIsLoggedIn);
	const navigate = useNavigate();
	useModal();

	useEffect(() => {
		//Redirect if loggedin
		if (isLoggedIn) {
			navigate('/channels/@me');
		}

		login.current.classList.add('active');
	}, [isLoggedIn, navigate]);
	return (
		<Wrapper>
			<div ref={login}>
				<div className='brand'>
					<BrandName />
				</div>
				<div className='left'>
					<h2>Welcome back!</h2>
					<p>We're so excited to see you again!</p>

					<form>
						<label htmlFor=''>email or phone number</label>
						<input type='email' required />

						<label htmlFor=''>password</label>
						<input type='password' required />

						<div className='link un'>Forgot your password?</div>

						<button type='submit' className='un'>
							Login
						</button>
					</form>
					<div>
						Need an account?{' '}
						<span className='link'>
							<Link to='/register'>Register</Link>
						</span>
					</div>
				</div>
				<div className='right'>
					<div className='qr'>
						<img src='/assets/images/qr-code.png' alt='' />
					</div>
					<h3>Log in with QR code</h3>

					<p>
						Scan this with the <span>Discord mobile app</span> to log in instantly.
					</p>
				</div>
			</div>
		</Wrapper>
	);
}

export default Login;
