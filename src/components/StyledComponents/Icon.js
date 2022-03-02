import styled, { css } from 'styled-components';

export const Icon = styled.div`
	position: absolute;
	bottom: -3px;
	right: -3px;
	display: grid;
	place-items: center;
	border-radius: 50%;
	width: 16px;
	aspect-ratio: 1;
	background-color: #3a3d43;

	.inner {
		border-radius: 50%;
		width: 63%;
		aspect-ratio: 1;
		border: 3px solid #39a05a;
		background-color: #39a05a;
	}

	${props =>
		!props.isOnline &&
		css`
			.inner {
				border-radius: 50%;
				width: 63%;
				aspect-ratio: 1;
				border: 3px solid #6d7885;
				background-color: #3a3d43;
			}
		`}
`;
