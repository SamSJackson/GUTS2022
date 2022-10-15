import { GetStaticProps } from "next";
import { FC } from "react";
import Header from "../../components/header";
import load_people from "../../loaders/load_people";

import styles from "/styles/people.module.css";

interface props {
  people: Person[];
}

let peoplePage: FC<props> = ({ people }) => {
  return (
    <div>
      <Header />
      <div className={styles.spacer} />
      <div>this is the search bar</div>
      {people.slice(0, 5).map((person) => {
        return <div>{person.name}</div>;
      })}
      This will be a list of people allows pagination & searching.
    </div>
  );
};

export let getStaticProps: GetStaticProps<props> = async (context) => {
  return {
    props: {
      people: load_people(),
    },
  };
};

export default peoplePage;
