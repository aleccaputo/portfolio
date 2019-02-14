import React from 'react';
import { Layout } from '../components/layout';
import { Image } from '../components/image';
import SEO from '../components/seo';
import Social from '../components/social';
import Projects from '../components/projects';
import { constants } from '../data/constants';
import '../styles/global.css';
import '../styles/index.css';

const IndexPage = () => (
  <Layout links={{...constants.socialMediaLinks, email: constants.email}}>
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
        <Social links={{...constants.socialMediaLinks, email: constants.email}} />
      </div>
      <div className={'column--2'}>
        <h1 className={'index--header'}>Alec Caputo</h1>
        <p>
          Full Stack software engineer building modern web applications using
          bleeding edge Javascript and React.js.
        </p>
      </div>
    </div>
    <Projects />
  </Layout>
);

export default IndexPage;
