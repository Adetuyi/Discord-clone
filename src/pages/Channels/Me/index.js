import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import MeAside from '../../../components/Channels/MeAside';
import CNavbar from '../../../components/Channels/Navbar';

import { useModal } from '../../../hooks/useModalWarning';

import { friends_svg } from '../../../utilities/svgs';

import { Wrapper } from '../../../components/StyledComponents/Channels.style';
import { Main } from './Me.styles';

const Me = () => {
	useModal();
	const { userId } = useParams();

	return (
		<Wrapper>
			<CNavbar />
			<MeAside />
			{userId ? (
				<Outlet />
			) : (
				<Main>
					<div className='top'>
						<span>
							{friends_svg}
							Friends
						</span>
						<ul>
							<li className='a active'>Online</li>
							<li className='a'>All</li>
							<li className='a'>Pending</li>
							<li className='a'>Blocked</li>
						</ul>
						<button>Add friend</button>
						<div className='end'>
							<span>new group dm</span>
							<span>Inbox</span>
							<span>Help</span>
						</div>
					</div>
					<div className='input'></div>
					<div className='friendlist'></div>
				</Main>
			)}
		</Wrapper>
	);
};

export default Me;
