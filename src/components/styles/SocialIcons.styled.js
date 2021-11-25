import styled from 'styled-components';

export const StyledSocialIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	li {
		list-style: none;
	}

	a {
		border: 1px solid #fff;
		border-radius: 50%;
		color: #fff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
		height: 50px;
		width: 50px;
		text-decoration: none;

		&:hover {
			background-color: #32d9d9;
		}
	}
`;
