import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 0 2rem;
	height: clamp(710px, 100vh, 900px);
	position: relative;
	display: grid;
	place-items: center;
	text-align: center;
	color: #fff;
	width: 100%;
	overflow: hidden;

	.top
	{ 		
		z-index: 10;

		> * {
			max-width: 750px;
			margin: 0 auto;
		}
	}
	h1 {
		font-size: 4.2rem;
		letter-spacing: -2px;
		text-transform: uppercase;
		font-family: var(--font-headings);
		transform: scale(1, 0.6);
	}
	p {
		max-width: 700px;
		font-size: var(--font-size);
		line-height: 1.8;
		font-family: var(--font-primary);
	}
	.hero-btns {
		margin-top: 1.5rem;

		.desktop {
			display: flex;
			justify-content: center;
			gap: 2rem;
			max-width: 700px;
		}
		.mobile {
			display: none;
			justify-content: center;
		}

		button {
			font-size: var(--font-home-btns);
		}
	}
	.bg-imgs {
		width: 2500px;
		background-color: #404eed;
		position: absolute;
		top: 0;
		left: 50%; 
		transform: translateX(-50%);
		z-index: -1;
		height: 100%;

		img {
			position: absolute;
			bottom: 0;
			height: 340px;
		}
		.left {
			left: 50%;
			transform: translateX(-1000px);
		}
		.right {
			left: 50%;
			transform: translateX(350px);
		}
	}

	@media (max-width: 900px) {
		text-align: left;
		padding-top: 9rem;
		display: block;

		.top > * {
			width: 100%;
		}

		h1 {
			font-size: var(--font-size-xx-lg);
			transform: scale(1, 0.8);
		}

		.hero-btns {
			.desktop {
				display: block;

				button {
					margin-bottom: 1.2rem;
				}
			}
		}
		.bg-imgs {
			.left {
				display: none;
			}
			.right {
				left: 50%;
				transform: translateX(-150px);

			}
		}
	}

	@media (max-width: 550px) {
		.bg-imgs {
			.left {
				display: block;
				height: 300px;
				left: 50%;
				transform: translateX(-60%);
			}
			.right {
				display: none;
			}
		}
	}

	@media (pointer: coarse) {
		.hero-btns {
			.desktop {
				display: none;
			}
			.mobile {
				display: flex;
			}
		}
	}
	@media (pointer: coarse) and (max-width: 900px){		
			.mobile {
				display: block !important;
			}
		}
	}
`;
