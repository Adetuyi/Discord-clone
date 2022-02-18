import React from 'react';
import Button from '../Buttons';
import { Wrapper } from './HeroSection.styles';
import { BsDownload } from 'react-icons/bs';

function HeroSection() {
	return (
		<Wrapper>
			<div className='top'>
				<h1>imagine a place...</h1>
				<p>
					...where you can belong to a school club, a gaming group, or a worldwide art
					community. Where just you and a handful of friends can spend time together. A
					place that makes it easy to talk every day and hang out more often.
				</p>
				<div className='hero-btns'>
					<div className='desktop'>
						<Button
							primary
							style={{
								display: 'flex',
								gap: '.8rem',
							}}
						>
							<BsDownload />
							<span>Download for Windows</span>
						</Button>
						<Button secondary>Open Discord in your browser</Button>
					</div>

					<div className='mobile'>
						<Button
							primary
							style={{
								display: 'flex',
								gap: '.8rem',
							}}
						>
							<BsDownload />
							<span>Download from Play Store</span>
						</Button>
					</div>
				</div>
			</div>
			<div className='bg-imgs'>
				<img src='../../assets/svgs/left_bg_landing_header.svg' alt='' className='left' />
				<img src='../../assets/svgs/right_bg_landing_header.svg' alt='' className='right' />
			</div>
		</Wrapper>
	);
}

export default HeroSection;
