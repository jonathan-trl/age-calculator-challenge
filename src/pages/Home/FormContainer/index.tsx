import { AiOutlineArrowDown } from "react-icons/ai";
import {
    Button,
    Form,
    Input,
    InputContainer,
    InputLabel,
    Separator,
} from "./FormContainer.style";

const FormContainer = ({
    handleSubmit,
}: {
    handleSubmit: React.FormEventHandler;
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <InputContainer>
                <InputLabel>DIA</InputLabel>
                <Input type="name" maxLength={2} name="day" placeholder="DD" />
            </InputContainer>
            <InputContainer>
                <InputLabel>MÊS</InputLabel>
                <Input
                    type="name"
                    maxLength={2}
                    name="month"
                    placeholder="MM"
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>ANO</InputLabel>
                <Input
                    type="name"
                    maxLength={4}
                    name="year"
                    placeholder="YYYY"
                />
            </InputContainer>
            <Separator>
                <Button type="submit">
                    <AiOutlineArrowDown />
                </Button>
            </Separator>
        </Form>
    );
};

export default FormContainer;
