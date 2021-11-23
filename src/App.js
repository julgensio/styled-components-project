import {ThemeProvider} from 'styled-components';
import {Container} from './components/styles/Container.styled'
import Header from './components/Header'
import GlobalStyle from './components/styles/Global'

function App() {

    const theme = {
        text: {
            header: '#fff'
        },

        //
        color: {
            header: '#FF9A8B',
            body: '#f8f8f8',
            footer: '#00333'
        }

    }
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle/>
                <Header/>
                <Container>
                    <h1>Hello World</h1>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default App;
