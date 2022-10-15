import load_people from "../../loaders/load_people";

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
                <li key={person.student_id}>{person.name}</li>
            ))}
        </ul>
    )
}

export default List;