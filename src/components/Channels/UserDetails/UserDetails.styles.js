import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background-color: #292b2f;
	padding: 0.5rem;

	.img {
		width: 39px;
		height: 39px;
		background-position: center;
		background-size: cover;
		border-radius: 50%;
		position: relative;
	}

	.icon {
		position: absolute;
		bottom: 0;
		right: 0;
		border-radius: 50%;
		background-color: green;
		width: 11px;
		aspect-ratio: 1;
	}
`;
