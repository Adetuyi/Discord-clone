import styled from 'styled-components';

export const Wrapper = styled.div`
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	align-self: end;
	gap: 0.5rem;
	background-color: #292b2f;
	padding: 0.3rem 0.5rem;

	.img {
		width: 39px;
		height: 39px;
		background-position: center;
		background-size: cover;
		border-radius: 50%;
		position: relative;
	}
	.name {
		margin-left: 0.2rem;

		i {
			color: var(--darkgrey);
		}

		h5 {
			color: #fff;
			font-size: 0.9rem;
		}
		p {
			color: var(--darkgrey);
			font-size: 0.78rem;
		}
	}

	.icons {
		display: flex;
		flex: 1;
		justify-content: end;
		gap: 0.1rem;

		> div {
			padding: 0.3rem 0.3rem 0.2rem;
			border-radius: 5px;
			cursor: pointer;

			:hover {
				background-color: var(--link-bg);
			}
		}
		svg {
			color: #b9bbbe;
		}
		.strikethrough {
			color: hsl(359, 82.6%, 59.4%);
		}
	}
`;
