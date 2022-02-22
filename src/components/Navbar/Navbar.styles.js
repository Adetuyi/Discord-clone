import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
	max-width: 1260px;
	width: 100%;
	margin: 0 auto;
	padding: 1rem 40px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.nav-links {
		display: flex;
		align-self: center;
		justify-items: center;

		button {
			font-weight: bold;
			background-color: unset;
			border: none;
			font-size: 1rem;
			color: #fff;
			padding: 0.3rem 0.5rem;
			margin: 0 0.5rem;
			cursor: pointer;

			:hover {
				text-decoration: underline;
			}
		}
	}

	.nav-btns {
		display: flex;
		align-items: center;
		font-size: 2rem;

		button {
			padding: 0.8em 1.2em;
			font-size: 0.9rem;
		}

		.bars {
			margin-left: 1rem;
			display: none;
			cursor: pointer;
			min-width: 25px;
		}
	}

	${props =>
		props.secondary &&
		css`
			.nav-links button {
				color: var(--almost-black);
			}
		`}

	@media (max-width: 1020px) {
		.nav-links {
			display: none;
		}

		.nav-btns .bars {
			display: block;
		}
	}

	@media (pointer: coarse) {
		.nav-btns a {
			display: none;
		}
	}
`;
