import { FC } from "react";

import styles from "../styles/PersonVisits.module.css";

interface props {
  visits: Visit[];
}

let PersonVisits: FC<props> = ({ visits }) => {
  return (
    <ul className={styles.list}>
      {visits.map((each) => (
        <li className={styles.item}>
          <p>Visited {each.location}</p>
          <span>
            <p>From </p>
            {each.start}
          </span>
          <span>
            <p>To </p>
            {each.end}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonVisits;
