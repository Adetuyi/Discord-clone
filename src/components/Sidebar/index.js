import React from 'react';
import { Wrapper } from './Sidebar.styles';
import Brandname from '../BrandName';
import { AiOutlineClose } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Button from '../Buttons';
import { IconContext } from 'react-icons';

const Sidebar = ({ isOpen, setIsOpen }) => {
	return (
		<Wrapper className={isOpen ? 'active' : null}>
			<div className='background' onClick={() => setIsOpen(false)}></div>
			<aside>
				<section>
					<header className='grid'>
						<Brandname color='#000' />
						<AiOutlineClose onClick={() => setIsOpen(false)} />
					</header>
					<section className='grid'>
						<ul className='side-bar-list'>
							<li className='active'>Home</li>
							<li>Download</li>
							<li>Nitro</li>
							<li>Safety</li>
							<li>Mod Academy</li>
							<li>Support</li>
							<li>Blog</li>
							<li>Careers</li>
						</ul>
					</section>
				</section>
				<div className='footer'>
					<Button
						tertiary
						style={{
							display: 'flex',
							gap: '.8rem',
						}}
					>
						<IconContext.Provider value={{ color: '#fff' }}>
							<BsDownload />
						</IconContext.Provider>
						<span>Download for Windows</span>
					</Button>
				</div>
			</aside>
		</Wrapper>
	);
};

export default Sidebar;
