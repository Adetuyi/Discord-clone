import styled from 'styled-components';

export const Wrapper = styled.section`
	pointer-events: none;
	transition: opacity 0.5s;
	opacity: 0;
	position: fixed;
	inset: 0;
	z-index: 200;

	&.active {
		opacity: 1;
		pointer-events: all;

		aside {
			transform: translateX(0);
		}
	}
	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.6);
	}
	aside {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		transform: translateX(100%);
		transition: transform 0.4s;
		width: 325px;
		max-width: 90%;
		overflow-y: auto;
		background-color: #fff;
		border-radius: 0.5rem 0 0 0.5rem;
		padding: 1.5rem 1rem 1.2rem 1.4rem;
		color: #000;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		header {
			align-items: center;
			font-size: 1.3rem;
			margin-bottom: 1.5rem;

			.brand-name {
				grid-column: 1/10;
				justify-self: start;
			}

			> svg {
				grid-column: 10/13;
				justify-self: end;
				cursor: pointer;
			}
		}
		section > section {
			ul {
				border-top: 1px solid #eee;
				padding-top: 0.5rem;
				grid-column: 1/12;
			}
			li {
				list-style: none;
				padding: 0.5rem 0.5rem 0.5rem 1rem;
				margin-bottom: 0.5rem;
				font-size: 1rem;
				cursor: pointer;

				:hover {
					text-decoration: underline;
				}
			}
			li:last-child {
				margin-bottom: 0;
			}
			.active {
				background: #eee;
				color: var(--brand);
				display: block;
				width: 100%;
				border-radius: 7px;
				margin-bottom: 0.5rem;

				li {
					margin-bottom: 0rem;
				}
			}
		}
	}
	.footer {
		margin-top: 1.5rem;

		button {
			font-size: 16px;
			margin: 0 auto;
		}
		.desktop {
			display: none;
		}
		.mobile button {
			font-size: var(--font-size-sm);
		}

		@media (hover) {
			.desktop {
				display: block;
			}
			.mobile {
				display: none;
			}
		}
	}
	@media (min-width: 1020px) {
		&.active {
			opacity: 0;
			pointer-events: none;
			transition: none;
		}
	}
`;
