import React from 'react';
import { Wrapper } from './Button.styles';

function Button(props) {
	const { children, primary, secondary, tertiary, style, className } = props;

	return (
		<Wrapper
			primary={primary}
			secondary={secondary}
			tertiary={tertiary}
			style={style}
			className={className}
		>
			{children}
		</Wrapper>
	);
}

export default Button;
