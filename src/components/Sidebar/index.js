import React from 'react';
import { Wrapper } from './Sidebar.styles';
import Brandname from '../BrandName';
import { AiOutlineClose } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
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
							<li className='un'>Download</li>
							<li className='un'>Nitro</li>
							<li className='un'>Safety</li>
							<li className='un'>Mod Academy</li>
							<li className='un'>Support</li>
							<li className='un'>Blog</li>
							<li className='un'>Careers</li>
						</ul>
					</section>
				</section>
				<div className='footer'>
					<div className='desktop'>
						<Button
							tertiary
							style={{
								display: 'flex',
								gap: '.8rem',
							}}
							className='un'
						>
							<IconContext.Provider value={{ color: '#fff' }}>
								<BsDownload />
							</IconContext.Provider>
							<span>Download for Windows</span>
						</Button>
					</div>
					<div className='mobile'>
						<Button
							tertiary
							style={{
								display: 'flex',
								gap: '.8rem',
							}}
							className='un'
						>
							<IconContext.Provider value={{ color: '#fff' }}>
								<BsDownload />
							</IconContext.Provider>
							<span>Download from Google Play</span>
						</Button>
					</div>
				</div>
			</aside>
		</Wrapper>
	);
};

export default Sidebar;
