import React from 'react';
import { Image } from '../image';
import PropTypes from 'prop-types';
import './experience.css';

export const Experience = ({ jobs }) => (
  <div>
    <h1 className={'experience--title'}>Experience</h1>
    {jobs.map(job => (
      <div className={'row expierence--row'}>
        <hr />
        <div className={'column--2'}>
          <div className={'experience--image-container'}>
            <a href={job.companyLink}>
              <img src={`/${job.imageName}`} />
            </a>
          </div>
        </div>
        <div className={'column--2'}>
          <p className={'experience--information'}>{job.description}</p>
          <p>{job.technologies.join(', ')}</p>
          <div />
        </div>
        <hr />
      </div>
    ))}
  </div>
);

Experience.propTypes = {
  jobs: PropTypes.array
};
