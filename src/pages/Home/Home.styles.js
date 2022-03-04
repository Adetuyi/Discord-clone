import styled from 'styled-components';

export const FlexBox = styled.section`
	&.grey {
		background-color: #eee;
	}

	> div {
		padding: 6rem 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		max-width: 1260px;
		margin: 0 auto;

		transform: translateY(30px);
		opacity: 0;
		transition: transform 1.2s, opacity 1.2s;
	}
	> div.fadeIn {
		transform: translateY(0);
		opacity: 1;
	}

	article {
		width: 40%;

		h2 {
			font-size: var(--font-size-x-lg);
			margin-bottom: 1.5rem;
			font-family: var(--font-headings);
			font-weight: 600;
		}
		p {
			font-size: var(--font-size);
			line-height: 1.4;
		}
	}
	img {
		width: 60%;
	}

	@media (max-width: 1020px) {
		> div {
			gap: 0.3rem;
		}

		article {
			width: 50%;
		}
		img {
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		&.grey {
			> div {
				flex-direction: column-reverse;
			}

			img {
				margin: 0;
			}
		}

		> div {
			padding: 4rem 1.5rem;
			flex-direction: column;
			gap: 1.5rem;
		}

		article,
		img {
			width: 100%;
		}
		article {
			h2 {
				margin-bottom: 1rem;
				font-size: var(--font-size-lg);
			}
			p {
				line-height: 1.5;
			}
		}
		img {
			margin-bottom: 1.5rem;
		}
	}
`;

export const GreyWrapper = styled.section`
	background-color: #eee;
	padding: 3.5rem 2rem;
	text-align: center;

	> div {
		transform: translateY(30px);
		opacity: 0;
		transition: transform 1.2s, opacity 1.2s;
	}

	> div.fadeIn {
		transform: translateY(0);
		opacity: 1;
	}

	h3,
	p {
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}
	h3 {
		font-size: clamp(20px, 4vw, 40px);
		font-family: var(--font-primary);
		font-weight: 900;
		margin-bottom: 1.4rem;
	}
	p {
		color: var(--almost-black);
		font-size: clamp(14px, 2vw, 18px);
		margin-bottom: 1.3rem;
	}
	img {
		width: 100%;
		max-width: 1180px;
	}

	.footer {
		margin-top: 4rem;

		h4 {
			font-family: var(--font-primary);
			font-weight: 600;
			font-size: 2rem;
			margin-bottom: 3rem;
		}

		button {
			font-size: 1.3rem;
			margin: 0 auto;
		}
		.mobile {
			display: flex;
		}
		.desktop {
			display: none;
		}
	}

	@media (max-width: 768px) {
		text-align: left;

		.footer {
			button {
				width: 100%;
			}
		}
	}
	@media (max-width: 430px) {
		.footer {
			h4 {
				font-size: 1.5rem;
			}
			button {
				width: 100%;
				font-size: 1.1rem;
			}
		}
	}

	@media (hover) {
		.footer {
			.mobile {
				display: none;
			}
			.desktop {
				display: flex;
			}
		}
	}
`;
