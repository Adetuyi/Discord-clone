import React from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import { FlexBox, GreyWrapper } from './Home.styles';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Button from '../../components/Buttons';
import { BsDownload } from 'react-icons/bs';
import HomeFooter from '../../components/HomeFooter';
import { useEffect } from 'react';
import { observer } from '../../utilities/IntersectionObserver';

function Home() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	useEffect(() => {
		const opaques = document.querySelectorAll('.opaque');

		opaques.forEach(opaque => {
			observer.observe(opaque);
		});
	}, []);
	return (
		<>
			<Navbar setIsOpen={setIsSideBarOpen} />
			<Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

			<HeroSection />

			<FlexBox>
				<div className='opaque'>
					<img src='/assets/svgs/fandom_landing.svg' alt='' />
					<article>
						<h2>Create an invite-only place where you belong</h2>
						<p>
							Discord servers are organized into topic-based channels where you can
							collaborate, share, and just talk about your day without clogging up a
							group chat.
						</p>
					</article>
				</div>
			</FlexBox>

			<FlexBox className='grey'>
				<div className='opaque'>
					<article>
						<h2>Where hanging out is easy</h2>
						<p>
							Grab a seat in a voice channel when you’re free. Friends in your server
							can see you’re around and instantly pop in to talk without having to
							call.
						</p>
					</article>
					<img src='/assets/svgs/hanging_out_easy_landing.svg' alt='' />
				</div>
			</FlexBox>

			<FlexBox>
				<div className='opaque'>
					<img src='/assets/svgs/fandom_landing.svg' alt='' />
					<article>
						<h2>From few to a fandom</h2>
						<p>
							Get any community running with moderation tools and custom member
							access. Give members special powers, set up private channels, and more.
						</p>
					</article>
				</div>
			</FlexBox>

			<GreyWrapper>
				<div className='opaque'>
					<article>
						<h3>RELIABLE TECH FOR STAYING CLOSE</h3>
						<p>
							Low-latency voice and video feels like you’re in the same room. Wave
							hello over video, watch friends stream their games, or gather up and
							have a drawing session with screen share.
						</p>
						<img src='/assets/svgs/just_chilling_landing.svg' alt='' />
					</article>

					<div className='footer'>
						<h4>Ready to start your journey?</h4>

						<div className='desktop'>
							<Button
								tertiary
								style={{
									display: 'flex',
									gap: '.8rem',
								}}
								className='un'
							>
								<BsDownload />
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
								<BsDownload />
								<span>Download from Google Play</span>
							</Button>
						</div>
					</div>
				</div>
			</GreyWrapper>

			<HomeFooter />
		</>
	);
}

export default Home;
