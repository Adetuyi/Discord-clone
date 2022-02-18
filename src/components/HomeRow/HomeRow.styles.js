import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	align-items: center;
	gap: 4rem;
	max-width: 900px;
	margin: 0 auto;
	background-color: ${props => (props.grey ? '#eee' : null)} img {
		flex-basis: 60%;
	}
`;
