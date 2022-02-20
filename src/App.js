import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';

function App() {
	const state = useSelector(state => state);
	console.log(state);

	return (
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
	);
}

export default App;
