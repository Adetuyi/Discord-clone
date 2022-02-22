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
		min-height: 630px;

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
		cursor: pointer;

		:disabled,
		[disabled] {
			background-color: #5865f2;
			color: var(--grey);
			cursor: not-allowed;
		}
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
	.main {
		width: 400px;
		max-width: 100%;

		h2 {
			text-align: center;
		}

		> span {
			font-size: 0.8rem;
		}
	}

	.dob {
		margin-top: 0.5rem;
		display: flex;
		gap: 1rem;

		.selectPrt {
			background-color: #303338;
			border: 1.5px solid #000;
			border-radius: 4px;
			height: 45px;
			width: 100%;
			max-width: 30%;
			font-size: 0.95rem;
			color: #eee;
			padding: 0 0.5rem;
			letter-spacing: 0.3px;
			position: relative;
			z-index: 10;

			.select {
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: pointer;
				height: 100%;

				span {
					max-width: 70%;
					overflow: hidden;
				}
				svg {
					padding-left: 3px;
				}
			}
		}
		.options {
			--height: 150px;
			overflow: auto;
			/* display: none; */
			background-color: #2f3136;
			border: 1.5px solid #000;
			border-radius: 4px;
			width: 100%;
			min-width: fit-content;
			position: absolute;
			top: calc((var(--height) + 5px) * -1);
			left: 50%;
			transform: translateX(-50%);
			height: var(--height);
		}
		.option {
			padding: 0.5rem 1rem;
			font-size: 1rem;

			:hover {
				background-color: #292b2f;
			}
		}
	}

	.consent {
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		padding: 1.3rem 0 1rem;

		div {
			line-height: 1.3;
		}

		.link {
			font-size: 0.7rem;
		}

		.checkbox {
			width: 20px;
			min-width: 20px;
			height: 20px;
			border: 1px solid #fff;
			border-radius: 3px;
			cursor: pointer;
			margin: 0 0.5rem 0 0;
			display: grid;
			place-items: center;
			font-size: 1rem;

			svg {
				display: none;
			}

			&.checked {
				background-color: #949cf7;

				svg {
					display: block;
				}
			}
		}
	}

	.btnParent {
		position: relative;

		.warn {
			--bgClr: #000;

			position: absolute;
			display: none;
			top: -55px;
			left: 50%;
			transform: translateX(-50%);
			width: 190px;
			font-size: 0.8rem;
			background-color: var(--bgClr);
			padding: 8px 15px;
			border-radius: 5px;

			svg {
				position: absolute;
				bottom: -9px;
				left: 50%;
				transform: translateX(-50%);
				color: var(--bgClr);
				font-size: 1rem;
			}
		}

		:hover button:disabled ~ .warn {
			display: block;
		}
	}

	.bg {
		position: absolute;
		inset: 0;
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
