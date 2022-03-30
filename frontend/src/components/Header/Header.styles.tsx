import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;
    background: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secoundary};
`;

export const Nav = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin: 0 1rem;
`;
