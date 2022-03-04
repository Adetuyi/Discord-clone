import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import { getUserDetails } from '../../../redux/selectors/getUserDetails';

import { unmute_svg, undeafen_svg, settings_svg } from '../../../utilities/svgs';

import { Wrapper } from './UserDetails.styles';

import { Icon } from '../../StyledComponents';

const UserDetails = () => {
	const details = useSelector(getUserDetails);

	return (
		<Wrapper>
			<div
				className='img'
				style={{
					backgroundImage: `url(/assets/images/${details.profileImg})`,
				}}
			>
				<Icon isOnline={details.isOnline}>
					<span className='inner'></span>
				</Icon>
			</div>
			<div className='name'>
				<h5>
					{details.name.length > 9 ? (
						<>
							{details.name.slice(0, 9)}
							<i>...</i>
						</>
					) : (
						details.name
					)}
				</h5>
				<p>#{details.id}</p>
			</div>
			<div className='icons'>
				<div className='has-more un'>
					<div className='more-info down'>
						Unmute
						<AiFillCaretDown />
					</div>
					{unmute_svg}
				</div>
				<div className='has-more un'>
					<div className='more-info down'>
						Undeafen
						<AiFillCaretDown />
					</div>
					{undeafen_svg}
				</div>
				<div className='has-more un'>
					<div className='more-info down'>
						User Settings
						<AiFillCaretDown />
					</div>
					{settings_svg}
				</div>
			</div>
		</Wrapper>
	);
};

export default UserDetails;
