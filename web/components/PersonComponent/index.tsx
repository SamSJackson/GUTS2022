import Link from "next/link";

type Props = {
    person : Person;
};

const PersonComponent : React.FC<Props> = ({person}) => {

    return (
        <div key={person.student_id} id={person.student_id} className="person-component">
            <Link className="person-component-link" href={`/people/${person.student_id.toLowerCase()}`}>{person.name}</Link>
        </div>
    )
}

export default PersonComponent;