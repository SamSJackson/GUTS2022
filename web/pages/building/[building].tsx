import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useRef } from "react";
import BuildingsMap from "../../components/BuildingsMap";
import Header from "../../components/header";
import get_building from "../../loaders/get_building";
import load_buildings from "../../loaders/load_buildings";
import slugify_building from "../../loaders/slugify_building";

import styles from "/styles/building.module.css";

interface props {
  building: Building;
  allBuildings: Building[];
}

const buildingPage: NextPage<props> = ({ building, allBuildings }) => {
  let g_spot = useRef<HTMLDivElement>();

  useEffect(() => {
    let loadGraph = async () => {
      let data = await fetch(
        `/static/buildings/${slugify_building(building)}.html`
      );
      let graph = await data.text();

      const slotHtml = document.createRange().createContextualFragment(graph);

      if (!g_spot.current) return;
      g_spot.current.innerHTML = "";
      g_spot.current.appendChild(slotHtml);
    };
    loadGraph();
  }, [building]);

  return (
    <div>
      <Header />
      <BuildingsMap
        buildings={allBuildings}
        selected={slugify_building(building)}
      />
      <div />
      <article className={styles.article}>
        <div className={styles.header}>
          <h2>{building.name}</h2>
          <h4>
            open from {building.opens.slice(-9, -3)} to{" "}
            {building.closes.slice(-9, -3)}
          </h4>
        </div>
        <h4 className={styles.sectionTitle}>Description:</h4>
        <p className={styles.description}>{building.description}</p>
        <section>
          <h4>Visits</h4>
          {/* @ts-ignore */}
          <div ref={g_spot} />
        </section>
      </article>
    </div>
  );
};

export let getStaticPaths: GetStaticPaths = async () => {
  const buildingNames: string[] = load_buildings().map(slugify_building);

  const paths = buildingNames.map((building) => {
    return {
      params: { building },
    };
  });
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
    allBuildings: load_buildings(),
  };
  return { props };
};

export default buildingPage;
