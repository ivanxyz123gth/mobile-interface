import { SnakeIcon, CalculatorIcon, PhoneIcon, NotebookIcon } from "../../Icons";

interface Aplication {
    name: string;
    path: string;
    icon: React.FC;
}

export const APPLICATIONS: Aplication[] = [
    {
        name: "Змейка",
        path: "/snake",
        icon: <SnakeIcon />
    },
    {
        name: "Калькулятор",
        path: "/calculator",
        icon: <CalculatorIcon />
    },
    {
        name: "Телефон",
        path: "/phone",
        icon: <PhoneIcon />
    },
    {
        name: "Контакты",
        path: "/contacts",
        icon: <NotebookIcon />
    },
]