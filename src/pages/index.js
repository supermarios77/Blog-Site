import * as React from "react";
import Layout from "../components/Layout.jsx";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>A Simple Blog-Site Made With Gatsby.</p>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
