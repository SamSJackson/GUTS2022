import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import BuildingsMap from "../../components/BuildingsMap";
import Header from "../../components/header";
import get_building from "../../loaders/get_building";
import get_buildings from "../../loaders/get_buildings";
import { slugify } from "../../loaders/slugify";

import styles from "/styles/building.module.css";

interface props {
  building: Building;
  allBuildings: Building[];
}

const buildingPage: NextPage<props> = ({ building, allBuildings }) => {
  return (
    <div>
      <Header />
      <BuildingsMap buildings={allBuildings} selected={slugify(building)} />

      <article className={styles.article}>
        <h2>{building.name}</h2>
        <p className={styles.description}>{building.description}</p>
        <code>open {building.opening_times}</code>
      </article>
    </div>
  );
};

export let getStaticPaths: GetStaticPaths = async () => {
  const buildingNames: string[] = get_buildings().map(slugify);

  console.log(buildingNames);
  const paths = buildingNames.map((building) => {
    return {
      params: { building },
    };
  });
  console.log(paths);
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  building: string;
}

export let getStaticProps: GetStaticProps = async (context) => {
  let { building } = context.params as IParams;

  let building_obj = get_building(building);
  let props = {
    building: building_obj,
    allBuildings: get_buildings(),
  };
  return { props };
};

export default buildingPage;
