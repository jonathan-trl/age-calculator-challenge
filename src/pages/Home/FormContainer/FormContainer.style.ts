import styled from "styled-components";
import Col from "../../../components/Col";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;

export const InputContainer = styled(Col)`
    gap: 10px;
`;

export const InputLabel = styled.label`
    color: ${({ theme }) => theme.colors.smokeygrey};
    letter-spacing: 5px;
    font-weight: 700;
    font-size: 14px;
`;

export const Input = styled.input`
    color: ${({ theme }) => theme.colors.offblack};
    font-weight: 700;
    font-size: 28px;
    font-weight: 800;
    padding: 10px 20px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.lightgrey};
    max-width: 160px;
    outline: none;
`;

export const Separator = styled.div`
    position: relative;
    width: 90%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightgrey};
    margin: 40px 0 60px;

    @media screen and (max-width: 900px) {
        margin-top: 60px;
    }
`;

export const Button = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.purple};
    border: none;
    position: absolute;
    right: 0;
    top: -50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 40px;

    @media screen and (max-width: 900px) {
        left: 50%;
        right: 0;
        transform: translate(-50%, -50%);
    }
`;
