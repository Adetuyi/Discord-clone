import styled from 'styled-components';

export const Wrapper = styled.nav`
	max-width: 1260px;
	width: 100%;
	padding: 1.5rem 40px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	z-index: 10;

	.brand-name {
		grid-column: 1/3;
	}

	.nav-links {
		grid-column: 3/11;
		align-self: center;
		justify-items: center;

		button {
			font-weight: bold;
			background-color: unset;
			border: none;
			font-size: 1.05rem;
			color: #fff;
			padding: 0.3rem 0.5rem;
			margin: 0 0.5rem;
			cursor: pointer;
		}
	}

	.nav-btns {
		grid-column: 11/13;
		display: flex;
		align-items: center;
		justify-content: end;
		font-size: 2rem;
		align-self: end;

		.bars {
			margin-left: 1rem;
			display: none;
			cursor: pointer;
		}
	}

	@media (max-width: 1020px) {
		.brand-name {
			grid-column: 1/6;

			div {
				justify-content: start;
			}
		}

		.nav-links {
			display: none;
		}

		.nav-btns {
			grid-column: 7/13;

			.bars {
				display: block;
			}
		}
	}
	@media (max-width: 300px) {
		left: 0;
		transform: translateX(0);
		min-width: 300px;
	}

	@media (pointer: coarse) {
		.nav-btns a {
			display: none;
		}
	}
`;
