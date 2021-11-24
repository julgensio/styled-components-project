import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import Header from './components/Header';
import ThemeProv from './components/styles/ThemeProv.styled';
import content from './content';

console.log(1);

// ! Main app
function App() {
	return (
		<ThemeProvider theme={ThemeProv}>
			<>
				<GlobalStyle />
				<Header />
				<Container> 
					{content.map((item, index) => (<p>{item.title}</p>))} 
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
