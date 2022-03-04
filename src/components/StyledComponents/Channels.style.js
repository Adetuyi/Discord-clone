import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	display: flex;
	height: 100vh;
	overflow-x: hidden;
	color: var(--channels-clr);
	font-size: 1rem;
	font-family: var(--font-headings);

	aside {
		min-width: 250px;
		max-width: 250px;
		background-color: var(--aside-bg);
		position: relative;
		padding: 0 0.5rem;
		overflow: auto;
	}
	main {
		background-color: var(--main-bg);
		flex-grow: 1;
		overflow-y: auto;
	}
`;
