import styled from 'styled-components';

export const Wrapper = styled.section`
	padding: 10rem 2rem 8rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1260px;

	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 900;
		color: var(--brand);
	}
	> div {
		max-width: 600px;
	}
	> div > p {
		margin: 0.5rem 0 1rem;
		color: var(--almost-black);
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.5;
	}

	img {
		width: 350px;
		max-width: 100%;
		margin: 0 2rem;
	}
	.link {
		width: fit-content;
	}

	@media (max-width: 900px) {
		padding: 7rem 2rem 4rem;
		flex-direction: column-reverse;
		align-items: unset;

		h1 {
			font-size: 2rem;
		}

		> div > p {
			font-size: 1.1rem;
		}

		img {
			width: 300px;
			margin: 0 auto 3rem;
		}
	}
	@media (max-width: 425px) {
		padding: 7rem 1rem 4rem;
	}
`;
