import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
	.top {
		display: grid;
		place-items: center;
		height: var(--top-height);
		border-bottom: 1px solid #000;
	}

	form {
		width: 100%;
	}

	input {
		display: block;
		width: 100%;
		height: 28px;
		border: none;
		color: #72756c;
		padding: 0.4rem;
		background-color: #202225;
	}

	ul {
		padding: 0.5rem;
	}

	li {
		position: relative;
		list-style-type: none;
		font-size: 0.95rem;
		margin-bottom: 0.2rem;
		cursor: pointer;

		:hover {
			background-color: var(--link-bg);
		}
		:hover .remove {
			display: grid;
		}
	}

	a,
	.a {
		position: relative;
		display: grid;
		align-items: center;
		grid-template-columns: 40px 1fr;
		grid-column-gap: 0.7rem;
		width: 100%;
		padding: 0.2rem 0.3rem;
		border-radius: 5px;
		height: 41px;
		overflow: hidden;

		:hover,
		&.active {
			svg {
				fill: #d7d8d9;
			}
		}
		&.active + .remove {
			display: none;
		}

		svg {
			margin: 0 auto;
		}

		.img {
			margin: 0 auto;
			width: 35px;
			height: 35px;
			background-position: center;
			background-size: cover;
			border-radius: 50%;
			position: relative;
		}
	}
	.remove {
		display: none;
		position: absolute;
		bottom: 0;
		right: 0;
		top: 0;
		place-items: center;
		padding: 0 0.3rem;
		background-color: var(--link-bg);

		svg {
			fill: #fff;
			font-size: 1.2rem;
		}
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 0.5rem;

		:hover {
			color: #d7d8d9;

			svg {
				fill: #d7d8d9;
			}
		}

		svg {
			cursor: pointer;
		}
	}

	h3 {
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	.user-details {
		position: absolute;
		bottom: 0;
	}
`;

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
