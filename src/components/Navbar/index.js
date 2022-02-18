import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BrandName from '../BrandName';
import Button from '../Buttons';
import { Wrapper } from './Navbar.styles';
import { getIsLoggedIn } from '../../redux/selectors';
import { VscThreeBars } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

function Navbar({ setIsOpen }) {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<Wrapper className='grid'>
			<BrandName />
			<div className='nav-links'>
				<button>Download</button>
				<button>Nitro</button>
				<button>Safety</button>
				<button>Support</button>
				<button>Blog</button>
				<button>Carrers</button>
			</div>
			<div className='nav-btns'>
				{isLoggedIn ? (
					<Link to='dashboard'>
						<Button primary>Open Discord</Button>
					</Link>
				) : (
					<Link to='login'>
						<Button primary>Login</Button>
					</Link>
				)}
				<IconContext.Provider value={{ color: 'white', className: 'bars' }}>
					<VscThreeBars onClick={() => setIsOpen(true)} />
				</IconContext.Provider>
			</div>
		</Wrapper>
	);
}

export default Navbar;
