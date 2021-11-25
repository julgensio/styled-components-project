import styled from 'styled-components';

// ! Button style
export const Button = styled.button`
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 15px 50px;
	border-radius: 50px;
	border: none;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
	& > div {
		display: none;
	}
	[type='no-margin'] {
		display: none;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
	}
`;
