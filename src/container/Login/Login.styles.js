import styled from 'styled-components';

export const Wrapper = styled.div`
	--grey: #b9bbbe;

	background-image: url('/assets/svgs/login_bg.svg');
	background-size: cover;
	background-repeat: no-repeat;
	min-height: 100vh;
	padding: 2rem 0;

	display: grid;
	place-items: center;

	> div {
		background-color: #36393f;
		display: flex;
		align-items: center;
		gap: 3.5rem;
		color: #eee;
		padding: 1.5rem 1.5rem;
		border-radius: 6px;
		min-width: 300px;
		min-height: 520px;

		transform: translateY(-50px);
		opacity: 0;

		&.active {
			animation: fadeIn 0.5s cubic-bezier(0.36, 1.44, 1, 1) forwards;
		}
	}
	.brand {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		text-align: center;
		display: none;
	}
	h2 {
		font-size: 1.54rem;
		font-weight: 600;
		line-height: 1.8;
	}
	label {
		color: var(--grey);
		text-transform: uppercase;
		display: block;
		font-size: 0.78rem;
		font-weight: 600;
	}
	form {
		margin: 1rem 0 0;

		.link {
			font-size: 0.9rem;
			margin-top: -5px;
		}
	}
	button {
		display: block;
		width: 100%;
		background-color: var(--brand);
		color: #fff;
		padding: 0.8em 1rem;
		font-size: 0.95rem;
		border: none;
		border-radius: 4px;
		margin: 1.2rem 0 0.7rem;
	}
	input {
		background-color: #303338;
		border: 1.5px solid #000;
		border-radius: 4px;
		height: 35px;
		width: 100%;
		margin: 0.5rem 0 1rem;
		padding: 1.3rem 0.5rem;
		font-size: 0.95rem;
		color: #eee;
		letter-spacing: 0.3px;

		:focus {
			outline: none;
			border: 1.5px solid var(--text-link);
		}
	}
	input[type='password'] {
		font-size: 1.2rem;
	}

	.qr {
		background-color: #fff;
		border-radius: 5px;
		width: fit-content;
		padding: 0.25rem 0.25rem 0 0.25rem;
		margin: 0 auto 1.5rem;
	}
	img {
		width: 140px;
	}
	h3 {
		font-size: 1.4rem;
		margin-bottom: 1rem;
	}
	p {
		color: var(--grey);
		font-size: 0.9rem;

		span {
			color: #fff;
		}
	}
	.left {
		width: 360px;
		max-width: 100%;

		h2,
		p {
			text-align: center;
		}

		> div {
			font-size: 0.9rem;
			color: var(--grey);
		}
	}
	.right {
		text-align: center;

		p {
			max-width: 260px;
			margin: 0 auto;
			font-size: 1rem;
		}
	}

	@media (max-width: 830px) {
		> div {
			padding: 2rem;
		}
		.left {
			width: 430px;
		}
		.right {
			display: none;
		}
	}
	@media (max-width: 500px) {
		> div {
			position: absolute;
			inset: 0;
		}
		.brand {
			display: block;
		}
	}

	@keyframes fadeIn {
		40% {
			opacity: 0.5;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;
