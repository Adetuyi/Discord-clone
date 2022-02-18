import React from 'react';
import { Wrapper } from './Button.styles';

function Button(props) {
	const { children, primary, secondary, tertiary, style } = props;

	return (
		<Wrapper primary={primary} secondary={secondary} tertiary={tertiary} style={style}>
			{children}
		</Wrapper>
	);
}

export default Button;
