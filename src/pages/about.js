import * as React from "react";
import Layout from "../components/layout.jsx";
import Seo from "../components/Seo.jsx";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This Is A Blog-Site Made With Gatsby.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />

export default AboutPage;
