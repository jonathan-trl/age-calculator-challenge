import styled from "styled-components";
import Row from "../../../components/Row";


export const Date = styled(Row)`
    gap: 5px;
    align-items: center;
`;

export const LabelExtraBold = styled.span`
    font-size: 62px;
    line-height: 66px;
    font-weight: 800;
`;

export const DateNumber = styled(LabelExtraBold)`
    color: ${({ theme }) => theme.colors.purple};
`;

export const DateText = styled(LabelExtraBold)`
    color: ${({ theme }) => theme.colors.offblack};
    font-style: italic;
`;
