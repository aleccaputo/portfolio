import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './projects.css';

const Projects = () => (
  <div>
    <h1 className={'projects--title'}>Projects</h1>
    <hr />
    <article className={'project--container'}>
      <div className={'row portfolio--row'}>
        <div className={'column--2'}>
          <h2>
            <a href={'https://github.com/aleccaputo/portfolio'}>
              Portfolio <FaGithub className={'projects--icon'}/>
            </a>
          </h2>
        </div>
        <div className={'column--2'}>
          <p>
            Built using{' '}
            <a
              className={'projects--gatsby-link'}
              href='https://www.gatsbyjs.org/'
            >
              GatsbyJS
            </a>
          </p>
          <p>Javascript, React, CSS</p>
        </div>
      </div>
    </article>
    <hr />
    <article className={'project--container'}>
      <div className={'row protfolio--row'}>
        <div className={'column--2'}>
          <h3>
            <a href={'https://github.com/codeforbtv/green-up-app'}>
              Green Up <FaGithub className={'projects--icon'}/>
            </a>
          </h3>
        </div>
        <div className={'column--2'}>
          <p>Built with functional Javascript and React Native</p>
          <p>Javascript, React Native, CSS, Functional Programming</p>
        </div>
      </div>
    </article>
    <hr />
    <article className={'project--container'}>
      <div className={'row protfolio--row'}>
        <div className={'column--2'}>
          <h3>
            <a href={'https://github.com/aleccaputo/ski-lift'}>
            Ski Lift <FaGithub className={'projects--icon'}/>
            </a>
          </h3>
        </div>
        <div className={'column--2'}>
          <p>Ride sharing app with skiers and snowboarders in mind</p>
          <p>Javascript, React Native, CSS</p>
        </div>
      </div>
    </article>
    <hr />
  </div>
);

export default Projects;
