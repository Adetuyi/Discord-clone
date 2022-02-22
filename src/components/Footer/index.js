import React from 'react';
import { Footer } from './Footer.styles';
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
					<div className='lang'>
						<img src='/assets/images/usa_flag.png' alt='' />
						<span>English, USA</span>
					</div>
					<div className='socials'>
						<IconContext.Provider
							value={{ color: '#fff', size: '1.3rem', className: 'un' }}
						>
							<FaTwitter />
							<BsInstagram />
							<AiFillFacebook />
						</IconContext.Provider>

						<IconContext.Provider
							value={{ color: '#fff', size: '1.7rem', className: 'un' }}
						>
							<AiFillYoutube />
						</IconContext.Provider>
					</div>
				</header>
				<div className='links'>
					<ul>
						<header>Product</header>
						<li className='un'>Download</li>
						<li className='un'>Nitro</li>
						<li className='un'>Status</li>
					</ul>
					<ul>
						<header>Company</header>
						<li className='un'>About</li>
						<li className='un'>Jobs</li>
						<li className='un'>Branding</li>
						<li className='un'>Newsroom</li>
					</ul>
					<ul>
						<header>Resources</header>
						<li className='un'>College</li>
						<li className='un'>Support</li>
						<li className='un'>Safety</li>
						<li className='un'>Blog</li>
						<li className='un'>Feedback</li>
						<li className='un'>Developers</li>
						<li className='un'>StreamKit</li>
					</ul>
					<ul>
						<header>Policies</header>
						<li className='un'>Terms</li>
						<li className='un'>Privacy</li>
						<li className='un'>Cookie</li>
						<li className='un'>Settings</li>
						<li className='un'>Guidelines</li>
						<li className='un'>Acknowledgements</li>
						<li className='un'>Licenses</li>
						<li className='un'>Moderation</li>
					</ul>
				</div>
			</section>
			<hr />
			<div className='footer'>
				<BrandName />
				<Button tertiary className='un'>
					Download
				</Button>
			</div>
		</Footer>
	);
};

export default HomeFooter;
