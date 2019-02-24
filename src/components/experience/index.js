import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "dealerpolicy.png" }
                  ) {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img
                  className={'experience--image'}
                  fluid={data.placeholderImage.childImageSharp.fluid}
                />
              )}
            />
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
