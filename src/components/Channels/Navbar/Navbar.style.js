import styled from 'styled-components';

export const Nav = styled.nav`
	--t-duration: 0.4s;

	min-width: 72px;
	background-color: #202225;

	.home {
		:hover a,
		a.active {
			background-color: #5865f2;

			svg {
				fill: #fff;
				transition: fill var(--t-duration);
			}
		}
		svg {
			fill: #e5e6e7;
			font-size: 1.8rem;
		}

		a {
			background-color: #4f545c;
			transition: background-color var(--t-duration);
		}
	}

	li {
		list-style: none;
		margin: 0.55rem 0;
		position: relative;
	}

	li:hover {
		a,
		button {
			border-radius: 1.2rem;
			background-color: #3ba55d;
			cursor: pointer;

			svg {
				fill: #fff;
				color: #fff;
			}
		}
		.border {
			height: 15px;
			left: 0px;
		}

		.name {
			display: block;
		}
	}
	a,
	button {
		display: grid;
		place-items: center;
		text-align: center;
		margin: 0 auto;
		padding: 0.5rem;
		border-radius: 50%;
		border: none;
		width: 50px;
		height: 50px;
		background-color: #4f545c;
		background-position: center;
		background-size: cover;
		transition: border-radius var(--t-duration);

		&.download svg {
			fill: transparent !important;
		}

		svg {
			color: #3ba55d;
			font-size: 1.5rem;
			fill: #3ba55d;
			transition: fill var(--t-duration);
		}

		&.active {
			border-radius: 1.2rem;

			~ .border {
				left: 0px;
				height: 28px;
			}
		}
	}
	.border {
		position: absolute;
		left: -4px;
		top: 50%;
		transform: translateY(-50%);
		width: 4px;
		height: 10px;
		background-color: #fff;
		border-radius: 0 5px 5px 0;
		transition: height var(--t-duration);

		&.unread {
			left: 0px;
		}
	}
	.name {
		display: none;
		font-size: 0.95rem;
		width: max-content;
		max-width: 23ch;
		z-index: 100;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(100%, -50%);
		background-color: #18191c;
		color: #eee;
		padding: 0.4rem 0.8rem;
		border-radius: 5px;
		pointer-events: none;

		svg {
			font-size: 1.2rem;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translate(-9.5px, -50%);
			fill: #18191c;
		}
	}
	.hr {
		border-top: 1px solid #4f545c;
		width: 70%;
		margin: 0 auto;
	}
`;
