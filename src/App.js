import React from 'react';
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import { setModal } from './redux/actions';
import { getModal } from './redux/selectors';
import { NEUTRAL } from './redux/types';
import { showModal } from './utilities/showModal';

function App() {
	const state = useSelector(state => state);
	console.log(state);

	const modalRef = useRef();
	const dispatch = useDispatch();
	const modal = useSelector(getModal);

	const handleUnavailableClick = useCallback(() => {
		showModal(modal, NEUTRAL);
	}, [modal]);

	// Set modal in redux store
	useEffect(() => {
		dispatch(setModal(modalRef.current));

		// Show modal for unavialble features
		const unavailableFeatures = document.querySelectorAll('.un');
		unavailableFeatures.forEach(feature =>
			feature.addEventListener('click', handleUnavailableClick)
		);

		// Prevent default for forms
		const forms = document.querySelectorAll('form');
		forms.forEach(form => form.addEventListener('submit', e => e.preventDefault()));
	}, [dispatch, handleUnavailableClick]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='dashboard' element={'dashboard'} />
					<Route path='server' element={'server'}>
						<Route path='global' element={'global chat'} />
						<Route path=':userId' element={'friendPAge'} />
					</Route>
					<Route path='*' element={'404'} />
				</Routes>
			</BrowserRouter>

			<p className='modal' ref={modalRef}>
				Hi, there
			</p>
		</>
	);
}

export default App;
