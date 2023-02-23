import styled from 'styled-components';

export const Main = styled.main`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: 1s;
    height: 100vh;

    @media (max-width: 899px) {
        height: auto;
    }
`;