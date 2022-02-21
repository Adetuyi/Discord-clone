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
			margin-left: auto;
			margin-right: auto;
		}
	}
	h1 {
		font-size: 4.2rem;
		letter-spacing: -2px;
		text-transform: uppercase;
		font-family: var(--font-primary);
		font-weight: 800;
	}
	p {
		line-height: 1.8;
		max-width: 700px;
	}
	.hero-btns {
		margin-top: 1.8rem;

		.desktop {
			display: flex;
			justify-content: center;
			gap: 2rem;
			max-width: 700px;

			a{
				display: block;
				padding: 0;
			}
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
			left: 0;
		}
		.left {
			left: 50%;
			height: 360px;
			transform: translateX(-1000px);
		}
		.right {
			left: 50%;
			height: 360px;
			transform: translateX(320px);
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
			margin-bottom: .8rem;
			font-size: var(--font-size-xx-lg);
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
		h1 {
			font-size: var(--font-size-x-lg);
			margin-bottom: .9rem;
		}
		p{
			line-height: 1.6;
		}
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
