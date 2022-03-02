import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import { nitro_svg, friends_svg } from '../../../utilities/svgs';

import { getFriends } from '../../../redux/selectors/getFriends';

import { Wrapper } from './MeAside.styles';
import UserDetails from '../UserDetails';
import { Icon } from '../../StyledComponents';

const MeAside = () => {
	const friends = useSelector(getFriends);

	const { pathname } = useLocation();

	const inFriendsPage = pathname === '/channels/@me' || pathname === '/channels/@me/';

	return (
		<Wrapper>
			<div className='top'>
				<form>
					<input type='text' placeholder='Find or start a conversation' />
				</form>
			</div>

			<ul>
				<li>
					<Link to='' className={inFriendsPage ? 'active a' : 'a'}>
						{friends_svg}
						<span>Friends</span>
					</Link>
				</li>
				<li className='un'>
					<div className='a'>
						{nitro_svg}
						<span>Nitro</span>
					</div>
				</li>
			</ul>
			<header>
				<h3>Direct Messages</h3>
				<div className='has-more un'>
					<span className='more-info down'>
						Create Dm
						<AiFillCaretDown />
					</span>
					<AiOutlinePlus />
				</div>
			</header>

			{/* Friend List */}
			<ul className='friend-list'>
				{friends.directMessages.map(friend => (
					<li key={friend.id}>
						<NavLink to={`/channels/@me/${friend.id}`} className='a'>
							<div
								className='img'
								style={{
									backgroundImage: `url(/assets/images/${friend.profileImg})`,
								}}
							>
								<Icon isOnline={friend.isOnline}>
									<span className='inner'></span>
								</Icon>
							</div>
							<span>
								{friend.name.length > 17
									? `${friend.name.slice(0, 17)}...`
									: friend.name}
							</span>
						</NavLink>
						<span className='remove un'>
							<IoMdClose />
						</span>
					</li>
				))}
			</ul>

			{/* User Details */}
			<UserDetails />
		</Wrapper>
	);
};

export default MeAside;
