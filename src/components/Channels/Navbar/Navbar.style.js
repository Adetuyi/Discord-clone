import styled from 'styled-components';

export const Nav = styled.nav`
	/* overflow-y: auto; */
	--t-duration: 0.4s;

	min-width: 72px;
	background-color: var(--nav-bg);

	.home {
		:hover a,
		a.active {
			background-color: #5865f2;

			svg {
				fill: #fff;
				transition: fill var(--t-duration);
			}
		}
		a svg {
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
	}
	a {
		position: relative;
	}

	.msgs {
		color: #fff;
		position: absolute;
		bottom: -4px;
		right: -4px;
		border-radius: 100px;
		font-size: 0.7rem;
		font-weight: bolder;
		padding: 0 0.3rem 0.15rem;
		border: 4px solid var(--nav-bg);
		background-color: #ed4245;
	}

	a,
	button {
		display: grid;
		place-items: center;
		text-align: center;
		margin: 0 auto;
		border-radius: 50%;
		border: none;
		width: 48px;
		height: 48px;
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

	.hr {
		border-top: 1px solid #4f545c;
		width: 70%;
		margin: 0 auto;
	}
`;
