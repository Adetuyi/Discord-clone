import React from 'react';
import { Footer } from './HomeFooter.styles';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import BrandName from '../BrandName';
import Button from '../Buttons';

const HomeFooter = () => {
	return (
		<Footer>
			<section>
				<header>
					<h2>Imagine a place</h2>
					<div></div>
					<div className='socials'>
						<IconContext.Provider value={{ color: '#fff', size: '1.3rem' }}>
							<FaTwitter />
							<BsInstagram />
							<AiFillFacebook />
						</IconContext.Provider>

						<IconContext.Provider value={{ color: '#fff', size: '1.7rem' }}>
							<AiFillYoutube />
						</IconContext.Provider>
					</div>
				</header>
				<div className='links'>
					<ul>
						<header>Product</header>
						<li>Download</li>
						<li>Nitro</li>
						<li>Status</li>
					</ul>
					<ul>
						<header>Company</header>
						<li>About</li>
						<li>Jobs</li>
						<li>Branding</li>
						<li>Newsroom</li>
					</ul>
					<ul>
						<header>Resources</header>
						<li>College</li>
						<li>Support</li>
						<li>Safety</li>
						<li>Blog</li>
						<li>Feedback</li>
						<li>Developers</li>
						<li>StreamKit</li>
					</ul>
					<ul>
						<header>Policies</header>
						<li>Terms</li>
						<li>Privacy</li>
						<li>Cookie</li>
						<li>Settings</li>
						<li>Guidelines</li>
						<li>Acknowledgements</li>
						<li>Licenses</li>
						<li>Moderation</li>
					</ul>
				</div>
			</section>
			<hr />
			<div className='footer'>
				<BrandName />
				<Button tertiary>Download</Button>
			</div>
		</Footer>
	);
};

export default HomeFooter;
