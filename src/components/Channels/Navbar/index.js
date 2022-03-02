import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { FaDiscord, FaCompass } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { AiFillCaretLeft, AiOutlinePlus } from 'react-icons/ai';

import { Nav } from './Navbar.style';
import { getServers } from '../../../redux/selectors/getServers';

const CNavbar = () => {
	const servers = useSelector(getServers);

	return (
		<Nav>
			<ul>
				<li className='home'>
					<NavLink to='/channels/@me'>
						<FaDiscord />
					</NavLink>
					<div className='border'></div>
					<div className='more-info'>
						Home
						<AiFillCaretLeft />
					</div>
				</li>

				<div className='hr'></div>
				{/* Servers */}
				{servers.map(({ id, name, profileImg, unreadMsgs }) => (
					<li key={id}>
						<NavLink
							to={`/channels/${id}`}
							style={{
								backgroundImage: `url(/assets/images/${profileImg})`,
							}}
						>
							{unreadMsgs > 0 ? (
								<div className='msgs'>{unreadMsgs > 99 ? '99+' : unreadMsgs}</div>
							) : null}
						</NavLink>
						<div className={`border ${unreadMsgs > 0 ? 'unread' : ''}`}></div>
						<div className='more-info'>
							{name}
							<AiFillCaretLeft />
						</div>
					</li>
				))}

				{/* Add server */}
				<li>
					<button className='un'>
						<AiOutlinePlus />
					</button>
					<div className='more-info'>
						Add a server
						<AiFillCaretLeft />
					</div>
				</li>

				{/* Explore servers */}
				<li>
					<button className='un'>
						<FaCompass />
					</button>
					<div className='border'></div>
					<div className='more-info'>
						Explore Public Servers
						<AiFillCaretLeft />
					</div>
				</li>

				<div className='hr'></div>

				{/* Download */}
				<li>
					<button className='un download'>
						<FiDownload />
					</button>
					<div className='border'></div>
					<div className='more-info'>
						Downloaded Apps
						<AiFillCaretLeft />
					</div>
				</li>
			</ul>
		</Nav>
	);
};

export default CNavbar;
