import load_people from "../../loaders/load_people";
import PersonComponent from "../PersonComponent";

type Props = {
    people : Person[];
    word: string;
};

const List : React.FC<Props> = ({people, word}) => {
    if (word != "") {
        people = people.filter(person => person.name.toLowerCase().includes(word.toLowerCase()));
    } else {
        people = [];
    }

    return(
        <ul>
            {people.map((person : Person) => (
                <PersonComponent person={person} />
            ))}
        </ul>
    )
}

export default List;