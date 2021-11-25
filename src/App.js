import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import ThemeProv from './components/styles/ThemeProv.styled';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import content from './content';

// ! Main app
function App() {
	return (
		<ThemeProvider theme={ThemeProv}>
			<>
				<GlobalStyle />
				<Header />
				<Container>
					{content.map((item, index) => (
						<Card key={index} item={item} />
					))}
				</Container>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
