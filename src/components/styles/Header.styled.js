import styled from 'styled-components';

// ! Header style sub components
export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.color.header};
	color: ${({ theme }) => theme.text.header};
	padding: 40px 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 9rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		/* margin-bottom: 1rem; */
	}
`;

export const Logo = styled.img`
	width: 15rem;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 15rem;
		margin-bottom: 3rem;
	}
`;

export const Image = styled.img`
	width: 50%;
	margin-left: 40px;
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 90%;
		margin: 2.5rem 0 1.875rem;
	}
`;

export const Paragraph = styled.p`
	margin: 2rem 0;
	font-size: 1em;
	font-weight: 600;
	color: #fff;
`;
