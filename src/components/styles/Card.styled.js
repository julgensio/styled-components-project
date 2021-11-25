import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	padding: 4rem;
	margin: 2.5rem 0;
	background-color: #fff;
	border-radius: 1rem;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

	/*Reverse Card layout */
	flex-direction: ${({ layout }) => layout || 'row'};

	h2 {
		padding-bottom: 1rem;
	}

	img {
		width: 80%;
	}
	& > div {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		padding: 2rem;
		/* width: 5rem; */
		.Card {
			width: 50rem;
			padding-bottom: 1rem;
		}
	}
`;
