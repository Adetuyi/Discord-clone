import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from './Register.styles';
import BrandName from '../../components/BrandName';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCheck, AiFillCaretDown } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/selectors';

function Register() {
	const login = useRef();
	const navigate = useNavigate();

	// Manipulator states
	const [isDisabled, setIsDisabled] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalFor, setModalFor] = useState('');

	// Key words
	const forMonth = 'MONTH';
	const forDay = 'DAY';
	const forYear = 'YEAR';

	// Info States
	const [month, setMonth] = useState(null);
	const [day, setDay] = useState(null);
	const [year, setYear] = useState(null);

	// Redux value
	const isLoggedIn = useSelector(getIsLoggedIn);

	// Disable button until agrrement to terms
	const handleDisabled = () => {
		setIsDisabled(prev => !prev);
	};

	/* When a select is clicked, opens the modal and sets modalFor to who should open
	 */
	const handleSelectClick = e => {
		setIsModalOpen(true);
		setModalFor(e.currentTarget.dataset.for);
	};

	/* When an option is clicked, returns if the parent was clicked else set the state of whoever  we are setting for at the moment
	Close modal and set modalFor to default
	*/
	const handleOptionClick = e => {
		if (e.currentTarget === e.target) {
			return;
		}
		const value = e.target.dataset.value;

		switch (modalFor) {
			case forMonth:
				setMonth(value);
				break;
			case forDay:
				setDay(value);
				break;
			case forYear:
				setYear(value);
				break;
			default:
				return null;
		}

		setModalFor('');
		setIsModalOpen(false);
	};

	useEffect(() => {
		if (isLoggedIn) {
			navigate('/dashboard');
		}

		login.current.classList.add('active');
	}, [isLoggedIn, navigate]);

	return (
		<Wrapper>
			<div ref={login}>
				<div className='brand'>
					<BrandName />
				</div>
				<div className='main'>
					<h2>Create an account</h2>

					<form>
						<label htmlFor=''>email</label>
						<input type='email' required />

						<label htmlFor=''>username</label>
						<input type='text' required />

						<label htmlFor=''>password</label>
						<input type='password' required />

						<label htmlFor=''>date of birth</label>

						<div className='dob'>
							<div className='selectPrt'>
								<div
									id='select'
									className='select'
									onClick={handleSelectClick}
									data-for={forMonth}
								>
									<span id='placeholder'>{month || 'Select'}</span>
									<AiFillCaretDown />
								</div>

								{isModalOpen && modalFor === forMonth && (
									<div className='options' onClick={handleOptionClick}>
										<div className='option' data-value='January'>
											January
										</div>
										<div className='option' data-value='Feb'>
											Febuary
										</div>
									</div>
								)}
							</div>
							<div className='selectPrt'>
								<div
									id='select'
									className='select'
									onClick={handleSelectClick}
									data-for={forDay}
								>
									<span id='placeholder'>{day || 'Select'}</span>
									<AiFillCaretDown />
								</div>

								{isModalOpen && modalFor === forDay && (
									<div className='options' onClick={handleOptionClick}>
										<div className='option' data-value='1'>
											1
										</div>
										<div className='option' data-value='2'>
											2
										</div>
									</div>
								)}
							</div>
							<div className='selectPrt'>
								<div
									id='select'
									className='select'
									onClick={handleSelectClick}
									data-for={forYear}
								>
									<span id='placeholder'>{year || 'Select'}</span>
									<AiFillCaretDown />
								</div>

								{isModalOpen && modalFor === forYear && (
									<div className='options' onClick={handleOptionClick}>
										<div className='option' data-value='1990'>
											1990
										</div>
										<div className='option' data-value='1991'>
											1991
										</div>
									</div>
								)}
							</div>
						</div>

						<div className='consent'>
							<div
								className={`checkbox ${!isDisabled ? 'checked' : ''}`}
								onClick={handleDisabled}
							>
								<AiOutlineCheck />
							</div>
							<div>
								I have read and agree to Discord's{' '}
								<span className='link'>Terms of Service</span> and{' '}
								<span className='link'>Privacy Policy</span>
							</div>
						</div>
						<div className='btnParent'>
							<button type='submit' disabled={isDisabled}>
								Continue
							</button>
							<div className='warn'>
								You need to agree to our terms of service to continue
								<AiFillCaretDown />
							</div>
						</div>
					</form>
					<span className='link'>
						<Link to='/login'>Already have an account?</Link>
					</span>
				</div>
				{isModalOpen && <div className='bg' onClick={() => setIsModalOpen(false)}></div>}
			</div>
		</Wrapper>
	);
}

export default Register;
