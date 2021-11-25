import styled from 'styled-components';

// ! Align elements side by side
export const Flex = styled.div`
	display: flex;
	margin-top: 2rem;

	& > div,
	& > ul {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;

		margin-top: 2rem;
	}
`;
