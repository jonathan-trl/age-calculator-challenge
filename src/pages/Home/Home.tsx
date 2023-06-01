import { useCalcAge } from "../../hooks/CalcAge";
import DateContainer from "./DateContainer";
import FormContainer from "./FormContainer";
import { Container } from "./Home.style";

const Home = () => {
    const { age, setAge, calcAge } = useCalcAge();

    const submit = (event: React.FormEvent) => {
        event.preventDefault();

        const year = (event.target as any).year.value;
        const month = (event.target as any).month.value;
        const day = (event.target as any).day.value;

        if (year == "" || month == "" || day == "") {
            setAge(null);
            return;
        }

        calcAge(day, month, year);
    };

    return (
        <Container>
            <FormContainer handleSubmit={submit} />
            <DateContainer {...age} />
        </Container>
    );
};

export default Home;
