import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './container/Home';
import Login from './container/Login';
import NotFound from './container/NotFound';
import Register from './container/Register';
import Me from './container/Channels/Me';

import { setModal } from './redux/actions';

function App() {
	const state = useSelector(state => state);
	console.log(state);

	const modalRef = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		// Set modal in redux store
		dispatch(setModal(modalRef.current));

		// Prevent default for forms
		const forms = document.querySelectorAll('form');
		forms.forEach(form => form.addEventListener('submit', e => e.preventDefault()));
	}, [dispatch]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='channels/@me' element={<Me />}>
						<Route path=':userId' element={'Friend Page'} />
					</Route>
					<Route path='channels/global' element={'Global chat'} />
					<Route path='channels/:serverId' element={'Server Page'} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>

			<p className='modal' ref={modalRef}>
				Hi there
			</p>
		</>
	);
}

export default App;
