import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: var(--almost-black);
	color: #fff;
	padding: 4rem 2rem 2rem;

	> * {
		max-width: 1260px;
		margin-left: auto;
		margin-right: auto;
	}

	h2 {
		text-transform: uppercase;
		font-family: var(--font-primary);
		font-weight: 900;
		font-size: 32px;
		color: var(--brand);
	}

	> section {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;

		> header {
			width: 20%;
		}
	}

	.lang {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-primary);
		margin-top: 1rem;
		font-size: 0.9rem;

		img {
			height: 16px;
		}
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 1.7rem;
		margin-top: 1rem;

		svg {
			cursor: pointer;
		}
	}
	.links {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		font-size: 1rem;
		font-weight: 300;
		width: 70%;
		padding: 1rem 2rem 0 0;
		font-family: var(--font-primary);

		header {
			color: var(--brand);
		}

		li {
			list-style: none;
			margin-top: 0.75rem;
			cursor: pointer;

			:hover {
				text-decoration: underline;
			}
		}
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 2rem;
	}

	@media (max-width: 1000px) {
		section {
			justify-content: space-between;

			> header {
				width: 30%;
			}
		}

		.links {
			display: grid;
			grid-template-columns: 1fr 1fr;
			justify-items: flex-end;

			ul {
				width: 50%;
			}
			ul:nth-child(2) {
				margin-bottom: 3rem;
			}
		}
	}

	@media (max-width: 768px) {
		> section {
			display: block;

			> header {
				width: 100%;
			}
		}
		.links {
			width: 100%;
			font-size: 0.95rem;
			margin-top: 2.4rem;
			padding-right: 0;
			justify-items: flex-start;
			justify-content: space-between;
			column-gap: 2rem;
		}
	}
`;
