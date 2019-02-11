import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import { Image } from '../components/image';
import SEO from '../components/seo';
import Social from '../components/social';
import { constants } from '../data/constants';
import '../styles/global.css';
import '../styles/index.css';

const IndexPage = () => (
  <Layout socialMediaLinks={constants}>
    <SEO
      title='Home'
      keywords={[
        `gatsby`,
        ,
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
    <div className={'row'}>
      <div className={'column--2'}>
        <div className={'index--image-container'}>
          <Image />
        </div>
        <Social links={constants} />
      </div>
      <div className={'column--2'}>
        <h1 className={'index--header'}>Alec Caputo</h1>
        <p>
          Full Stack software engineer building modern web applications using
          bleeding edge Javascript and React.js.
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
