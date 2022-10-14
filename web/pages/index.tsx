import type { NextPage } from "next";
import Head from "next/head";
import Map from "../components/map";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Whodunnit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>whodunnit</h1>
        </header>
      </main>
    </div>
  );
};

export default Home;
