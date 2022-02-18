import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaDiscord } from 'react-icons/fa';
import { Wrapper } from './BrandName.styles';

function BrandName({ color }) {
	return (
		<Link to='/' className='brand-name'>
			<Wrapper color={color}>
				<IconContext.Provider value={{ color: color || '#fff' }}>
					<FaDiscord />
				</IconContext.Provider>
				<span>Discord</span>
			</Wrapper>
		</Link>
	);
}

export default BrandName;
