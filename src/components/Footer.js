import SocialIcons from './SocialIcons';
import { FooterTag } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

export default function Footer() {
	return (
		<StyledFooter>
			<FooterTag>
				<img src='./images/Reveal-01.svg' alt='Reveal' />
				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</li>
						<li>+316 456-435-45</li>
						<li>info@reveale.com</li>
					</ul>
					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>

					<ul>
						<li>Career</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>
					<SocialIcons />
				</Flex>
				<p>&copy; 2021 Reveal all rights reserved</p>
			</FooterTag>
		</StyledFooter>
	);
}
