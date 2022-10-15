import { GetStaticProps, NextPage } from "next";
import BuildingsMap from "../components/BuildingsMap";
import Header from "../components/header";
import load_buildings from "../loaders/load_buildings";

interface props {
  buildings: Building[];
}

const HomePage: NextPage<props> = ({ buildings }) => {
  return (
    <div>
      <Header />
      <BuildingsMap buildings={buildings} selected="" />
    </div>
  );
};

export let getStaticProps: GetStaticProps<props> = async (context) => {
  return {
    props: {
      buildings: load_buildings(),
    },
  };
};

export default HomePage;
