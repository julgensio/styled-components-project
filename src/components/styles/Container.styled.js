import styled from 'styled-components';

// ! Main style container
export const Container = styled.div`
	width: 80rem;
	max-width: 100%;
	padding: 0 60px;
	margin: 0 auto;
	min-height: 100vh;
`;

// ! Override Container styles for footer
export const FooterTag = styled(Container)`
	min-height: ${({ height }) => height || '0'};

	@media (max-width: ${({ theme }) => theme.mobile}) {
		img {
			width: 90%;
		}
	}
`;
