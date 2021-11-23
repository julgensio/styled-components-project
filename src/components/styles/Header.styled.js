import styled from 'styled-components'


export const StyledHeader = styled.header `
    background-color:  ${
    ({theme}) => theme.color.header
} ;
    color: ${
    ({theme}) => theme.text.header
};
    padding: 40px 0;


`
