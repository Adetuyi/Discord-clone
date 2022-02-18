import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	font-size: 2rem;

	span {
		font-size: 1.3rem;
		font-weight: bold;
		color: ${props => props.color || '#fff'};
	}
`;
