import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Header from "../../components/header";
import PersonVisits from "../../components/PersonVisits";
import get_person from "../../loaders/get_person";
import load_people from "../../loaders/load_people";
import load_person_image from "../../loaders/load_person_image";
import slugify_person from "../../loaders/slugify_person";

import styles from "/styles/person.module.css";

interface props {
  person: Person;
  image: string;
}

const personPage: NextPage<props> = ({ person, image }) => {
  return (
    <div>
      <Header />
      <div className={styles.spacer} />
      <article className={styles.article}>
        <h2>{person.name}</h2>
        <h5>ID: {person.student_id}</h5>
        {person.interview && (
          <section className={styles.statement}>
            <h4 className={styles.sectionTitle}>Statement/Interview:</h4>
            <p>{person.interview}</p>
          </section>
        )}
        <section>
          <h4 className={styles.sectionTitle}>Timeline  </h4>
          <div dangerouslySetInnerHTML={{__html:image}}></div>
        </section>
        <section>
          <h4 className={styles.sectionTitle}>Visits:</h4>
          <PersonVisits visits={person.visits} />
        </section>
      </article>
    </div>
  );
};

export let getStaticPaths: GetStaticPaths = async () => {
  const pids: string[] = load_people().map(slugify_person);

  const paths = pids.map((pid) => {
    return {
      params: { pid },
    };
  });
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  pid: string;
}

export let getStaticProps: GetStaticProps = async (context) => {
  let { pid } = context.params as IParams;
  let image = load_person_image(pid);

  let person = get_person(pid);
  let props = {
    person,
    image,
  };
  return { props };
};

export default personPage;
