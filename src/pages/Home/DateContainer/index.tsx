import Col from "../../../components/Col";
import { ageProps } from "../../../types/ageProps";
import { Date, DateNumber, DateText } from "./DateContainer.style";

const DateContainer = ({ years, months, days }: ageProps) => {
    return (
        <Col>
            <Date>
                <DateNumber>{years || years === 0 ? years : "--"}</DateNumber>
                <DateText>anos</DateText>
            </Date>
            <Date>
                <DateNumber>
                    {months || months === 0 ? months : "--"}
                </DateNumber>
                <DateText>meses</DateText>
            </Date>
            <Date>
                <DateNumber>{days || days === 0 ? days : "--"}</DateNumber>
                <DateText>dias</DateText>
            </Date>
        </Col>
    );
};

export default DateContainer;
