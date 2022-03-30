import styled from 'styled-components';

const Button = styled.button`
    margin: 0.5rem;
    padding: 1rem 3rem;
    font-size: 1.7rem;
    border-radius: 1rem;
    transition: all 0.6s;
    font-weight: 900;
    border: none;
    cursor: pointer;
`;

export const PrimaryButton = styled(Button)<{ secoundaryColor?: boolean }>`
    background: ${({ theme, secoundaryColor }) => (secoundaryColor ? theme.colors.secoundary : theme.colors.primary)};
    color: #fff;
    border: 1px solid #fff;

    :hover {
        background: #fff;
        color: ${({ theme, secoundaryColor }) => (secoundaryColor ? theme.colors.secoundary : theme.colors.primary)};
        border: 1px solid
            ${({ theme, secoundaryColor }) => (secoundaryColor ? theme.colors.secoundary : theme.colors.primary)};
    }
`;

export const SecoundaryButton = styled(Button)<{ secoundaryColor?: boolean }>`
    background: #fff;
    color: ${({ theme, secoundaryColor }) => (secoundaryColor ? theme.colors.secoundary : theme.colors.primary)};
    border: 1px solid
        ${({ theme, secoundaryColor }) => (secoundaryColor ? theme.colors.secoundary : theme.colors.primary)};

    :hover {
        background: ${({ theme, secoundaryColor }) =>
            secoundaryColor ? theme.colors.secoundary : theme.colors.primary};
        color: #fff;
        border: 1px solid #fff;
    }
`;
