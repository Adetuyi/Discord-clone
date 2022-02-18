import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';

function App() {
	const state = useSelector(state => state);
	console.log(state);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={'register'} />
				<Route path='dashboard' element={'dashboard'} />
				<Route path='server' element={'server'}>
					<Route path='global' element={'global chat'} />
					<Route path=':userId' element={'friendPAge'} />
				</Route>
				<Route path='*' element={'404'} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
