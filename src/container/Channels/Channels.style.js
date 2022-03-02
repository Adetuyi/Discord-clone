import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	color: #72756c;

	aside {
		min-width: 250px;
		max-width: 250px;
		/* width: 0px; */
		overflow: hidden;
		background-color: var(--aside-bg);
		position: relative;
		padding: 0 0.5rem;
	}
	main {
		background-color: var(--main-bg);
		flex-grow: 1;
	}
`;
