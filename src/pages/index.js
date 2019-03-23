import React from "react";
import { Layout } from "../components/layout";
import { Image } from "../components/image";
import SEO from "../components/seo";
import Social from "../components/social";
import Projects from "../components/projects";
import { Experience } from "../components/experience";
import "../styles/global.css";
import "../styles/index.css";

const IndexPage = ({ pageContext }) => (
  <Layout links={{ ...pageContext.socialMediaLinks, email: pageContext.email }}>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `Alec Caputo`,
        `application`,
        `react`,
        `portfolio`,
        `javascript`,
        `es6`,
        `software engineer`,
        `job`,
        `recruit`
      ]}
    />
    <div className={"row--header"}>
      <div className={"column--2"}>
        <div className={"index--image-container"}>
          <Image />
        </div>
      </div>
      <div className={"column--2"}>
        <h1 className={"index--header"}>Alec Caputo</h1>
        <p className={"index--description"}>
          Full Stack software engineer building modern web applications using
          bleeding edge Javascript and React.js.
        </p>
        <Social
          links={{ ...pageContext.socialMediaLinks, email: pageContext.email }}
        />
      </div>
    </div>
    <Experience jobs={pageContext.jobs} internships={pageContext.internships} />
    <Projects />
  </Layout>
);

export default IndexPage;
