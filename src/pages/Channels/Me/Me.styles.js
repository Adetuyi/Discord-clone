import styled from 'styled-components';

export const Main = styled.main`
	background-color: var(--main-bg);
	overflow: hidden;

	.top {
		position: relative;
		display: flex;
		align-items: center;

		> span {
			display: flex;
			align-items: center;
			margin-right: 1rem;
			border-right: 1px solid var(--link-hover);
			padding: 0.2rem 1rem;
			font-weight: 600;
			color: #fff;

			svg {
				font-size: 1.6rem;
				margin-right: 0.5rem;
				fill: #72767d;
			}
		}
	}
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 0.8rem;
		min-width: max-content;
	}
	.a {
		font-size: 0.95rem;

		&.active {
			background-color: #3a3e44;
		}
		:hover {
			background-color: #3a3e42;
		}
	}
	button {
		background-color: green;
		color: #fff;
		padding: 0.2rem 0.35rem;
		font-size: 0.95rem;
	}
	.end {
		display: flex;
		align-items: center;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #36393f;
		padding-left: 0.5rem;
	}
`;
