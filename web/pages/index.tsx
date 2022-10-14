import { GetStaticProps, NextPage } from "next";
import BuildingsMap from "../components/BuildingsMap";
import Header from "../components/header";
import get_buildings from "../loaders/get_buildings";

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
      buildings: get_buildings(),
    },
  };
};

export default HomePage;
