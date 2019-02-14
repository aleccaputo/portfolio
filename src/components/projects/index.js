import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './projects.css';

const Projects = () => (
  <div>
    <h1 className={'projects--title'}>Projects</h1>
    <article className={'project--container'}>
      <h2>
        Profolio{' '}
        <a href={'https://github.com/aleccaputo/portfolio'}>
          <FaGithub />
        </a>
      </h2>
      <ul>
        <li>
          Built using{' '}
          <a
            className={'projects--gatsby-link'}
            href='https://www.gatsbyjs.org/'
          >
            GatsbyJS
          </a>
        </li>
        <li>
            Javascript, React, CSS
        </li>
      </ul>
    </article>
    <article className={'project--container'}>
      <h2>
        Green Up{' '}
        <a href={'https://github.com/codeforbtv/green-up-app'}>
          <FaGithub />
        </a>
      </h2>
      <ul>
        <li>
          Built with functional Javascript and React Native
        </li>
        <li>
            Javascript, React Native, CSS, Functional Programming
        </li>
      </ul>
    </article>
    <article className={'project--container'}>
      <h2>
        Ski Lift{' '}
        <a href={'https://github.com/aleccaputo/ski-lift'}>
          <FaGithub />
        </a>
      </h2>
      <ul>
        <li>
          Ride sharing app with skiers and snowboarders in mind
        </li>
        <li>
            Javascript, React Native, CSS
        </li>
      </ul>
    </article>
  </div>
);

export default Projects;
