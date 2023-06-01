import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    padding: 55px 30px 55px 45px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    border-bottom-right-radius: 160px;

    @media screen and (max-width: 900px) {
        width: auto;
    }
`;