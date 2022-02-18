import React from 'react';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import HomeRow from '../../components/HomeRow';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';

function HomePage() {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	return (
		<>
			<Navbar setIsOpen={setIsSideBarOpen} />
			<Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
			<HeroSection />
			<HomeRow>
				<img src='' alt='' />
				<div>
					<h2>Create an invite-only place where you belong</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum
						dolor reiciendis, ad dolore quos, optio quaerat dignissimos modi voluptatem,
						fugiat corporis blanditiis minima ab eaque sapiente incidunt possimus harum.
					</p>
				</div>
			</HomeRow>
		</>
	);
}

export default HomePage;
