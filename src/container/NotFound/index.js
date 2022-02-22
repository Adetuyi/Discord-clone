import React from 'react';
import { Wrapper } from './NotFound.styles';
import NavAndSidebar from '../../components/NavAndSidebar';
import Footer from '../../components/Footer';

const NotFound = () => {
	return (
		<>
			<NavAndSidebar secondary />
			<Wrapper>
				<div>
					<h1>Wrong turn?</h1>
					<p>
						You look lost, stranger. You know what helps when you’re lost? A piping hot
						bowl of noodles. Take a seat, we’re frantically at work here cooking up
						something good. Oh, you need something to read? These might help you:
					</p>
					<div className='help'>
						<p className='un link'>Status Page</p>
						<p className='un link'>@Discord</p>
						<p className='un link'>Discord Support</p>
					</div>
				</div>
				<img src='/assets/images/not-found.gif' alt='' />
			</Wrapper>
			<Footer />
		</>
	);
};

export default NotFound;
