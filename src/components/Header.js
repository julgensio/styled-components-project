import {
	StyledHeader,
	Nav,
	Logo,
	Image,
	Paragraph,
} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styles';

// ! Header components
export default function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='./images/Reveal-01.svg' alt='' />

					<Button>Try For Free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Design Your own Website</h1>
						<Paragraph>
							Building your website with a few clicks work together as a team
						</Paragraph>
						<Button bg='#32d9d9' color='#fff'>
							Get stared for Free
						</Button>
					</div>
					<Image src='./images/information.svg' alt='information-study'></Image>
				</Flex>
			</Container>
		</StyledHeader>
	);
}
