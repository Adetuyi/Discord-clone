import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const NavAndSidebar = ({ secondary }) => {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false);

	return (
		<>
			<Navbar setIsOpen={setIsSideBarOpen} secondary={secondary} />
			<Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} secondary={secondary} />
		</>
	);
};

export default NavAndSidebar;
