import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
	display: block;
	padding: 0.9em 1.8em;
	border: none;
	border-radius: 5rem;
	cursor: pointer;
	align-items: center;
	justify-content: center;
	font-size: var(--font-size-sm);

	:hover,
	:focus {
		box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
	}

	${props => props.style}
	${props =>
		props.primary &&
		css`
			background-color: #fff;
			color: #000;

			:hover,
			.focus {
				color: var(--brand);
			}
		`}
	${props =>
		props.secondary &&
		css`
			background-color: #23272a;
			color: #fff;
			position: relative;
			overflow: hidden;

			:hover::before,
			:focus::before {
				content: '';
				position: absolute;
				inset: 0;
				background-color: rgba(255, 255, 255, 0.04);
			}
		`}
	${props =>
		props.tertiary &&
		css`
			background-color: var(--brand);
			color: #fff;
			position: relative;
			overflow: hidden;

			:hover::before,
			:focus::before {
				content: '';
				position: absolute;
				inset: 0;
				background-color: rgba(250, 250, 250, 0.1);
			}
		`}
`;
