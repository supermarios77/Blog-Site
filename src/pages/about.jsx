import * as React from "react";
import Layout from "../components/Layout.jsx";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This Is A Blog-Site Made With Gatsby.</p>
    </Layout>
  );
};

export const Head = () => <title>About</title>;

export default AboutPage;
