import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BrandName from '../BrandName';
import Button from '../Buttons';
import { Wrapper } from './Navbar.styles';
import { getIsLoggedIn } from '../../redux/selectors';
import { VscThreeBars } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

function Navbar({ setIsOpen, secondary }) {
	const isLoggedIn = useSelector(getIsLoggedIn);

	const barClr = secondary ? 'var(--almost-black)' : 'white';
	const brandClr = secondary ? 'var(--almost-black)' : '';

	// Btns conditional color
	const loginBtn = secondary ? <Button tertiary>Login</Button> : <Button primary>Login</Button>;
	const openDcBtn = secondary ? (
		<Button tertiary>Open Discord</Button>
	) : (
		<Button primary>Open Discord</Button>
	);

	// Nav btn conditional btn
	const navBtn = isLoggedIn ? (
		<Link to='dashboard'>{openDcBtn}</Link>
	) : (
		<Link to='login'>{loginBtn}</Link>
	);

	return (
		<Wrapper secondary={secondary}>
			<BrandName color={brandClr} />
			<div className='nav-links'>
				<button className='un'>Download</button>
				<button className='un'>Nitro</button>
				<button className='un'>Safety</button>
				<button className='un'>Support</button>
				<button className='un'>Blog</button>
				<button className='un'>Carrers</button>
			</div>
			<div className='nav-btns'>
				{navBtn}
				<IconContext.Provider
					value={{
						color: barClr,
						className: 'bars',
					}}
				>
					<VscThreeBars onClick={() => setIsOpen(true)} />
				</IconContext.Provider>
			</div>
		</Wrapper>
	);
}

export default Navbar;
