import React from "react"
import { Link } from "gatsby"

import {Layout} from "../components/layout"
import {Image} from "../components/image"
import SEO from "../components/seo"
import Social from '../components/social';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, , `Alec Caputo`, `application`, `react`, `portfolio`, `javascript`, `es6`, `software engineer`, `job`, `recruit`]} />
    <div style={{ maxWidth: `300px`, margin: `0 auto` }}>
      <Image />
      <Social />
    </div>
    <h1 className={'index--header'}>Alec Caputo</h1>
    <p>Full Stack software engineer building modern web applications using bleeding edge Javascript and React.js, </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
