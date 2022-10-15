import { GetStaticProps } from "next";
import { FC, useState } from "react";
import Header from "../../components/header";
import load_people from "../../loaders/load_people";
import List from "../../components/List";

import styles from "/styles/people.module.css";

interface props {
  people: Person[];
}

let peoplePage: FC<props> = ({ people }) => {
  const [word, setWord] = useState("");
  
  return (
    <div>
      <Header />
      <div className={styles.spacer} />
      <input id="search-input" onChange={e => setWord(e.target.value)} value={word} />
      <List people={people} word={word}/>
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
