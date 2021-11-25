import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.color.footer};
	color: #fff;
	padding: 3.25rem 0 3.75rem;
	margin-bottom: 0;

	ul {
		list-style: none;
	}
	ul li {
		margin-bottom: 1.25rem;
	}
	p {
		text-align: right;
	}
	img {
		width: 10rem;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		text-align: center;
		min-height: 100vh;
		ul {
			padding: 0;
		}
		p {
			text-align: center;
		}
	}
`;
