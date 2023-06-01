import { useState } from "react";
import { ageProps } from "../types/ageProps";

export const useCalcAge = () => {
    const [age, setAge] = useState<ageProps | null>();

    const calcAge = (
        diaNascimento: number,
        mesNascimento: number,
        anoNascimento: number
    ) => {
        const dataAtual = new Date();
        const diaAtual = dataAtual.getDate();
        const mesAtual = dataAtual.getMonth() + 1;
        const anoAtual = dataAtual.getFullYear();

        let years = anoAtual - anoNascimento;
        let months = mesAtual - mesNascimento;
        let days = diaAtual - diaNascimento;

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months = 12 + mesAtual - mesNascimento - 1;
            days = 31 + diaAtual - diaNascimento;
        } else {
            months = mesAtual - mesNascimento;
        }

        const idade = {
            years,
            months,
            days,
        };

        setAge(idade);
    };

    return {
        age,
        setAge,
        calcAge,
    };
};
