import type { NextPage } from "next";

import { Layout } from "components/Layout";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fast Ecommerce Template</title>
      </Head>
      <Layout>
        <h1>Fast Ecommerce Template</h1>
      </Layout>
    </>
  );
};

export default Home;
