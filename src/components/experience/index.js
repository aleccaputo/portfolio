import React, { useState } from 'react';
import { StaticQuery, graphql } from "gatsby"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Img from "gatsby-image"
import PropTypes from 'prop-types';
import './experience.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const Experience = ({ jobs, internships }) => {
  const [internshipsIsVisible, setIntershipsIsVisible] = useState(false);
  return (
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
                  <OutboundLink target='_blank' href={job.company === 'DealerPolicy' ? job.companyLink : '#'}>
                    <Img
                      className={'experience--image'}
                      fluid={data.placeholderImage.childImageSharp.fluid}
                    />
                  </OutboundLink>
                )}
              />
              <p className={'experience--information'}>{job.description}</p>
            </div>
          </div>
          <div className={'column--2'}>
            <ul>
              {job.experience.map(item => (
                <li>{item}</li>
              ))}
            </ul>
            <p>{job.technologies.join(', ')}</p>
            <div />
          </div>
          <hr />
        </div>
      ))}
      <h3 className={'experience--internship-header'} onClick={() => setIntershipsIsVisible(!internshipsIsVisible)}>{'Internships'}{internshipsIsVisible ? <FaArrowUp className={'experience--svg-icon'} /> : <FaArrowDown className={'experience--svg-icon'} />}</h3>
      <div className={'experience--internship-container'} style={!internshipsIsVisible ? internshipVisibility : null}>
        {internships.map(internship => (
          <div className={'row expierence--row'}>
            <div className={'column--2'}>
              <OutboundLink target='_blank' href={internship.companyLink}><h3 className={'experience--internship-company'}>{internship.company}</h3></OutboundLink>
              <p className={'experience--internship-title'}>{internship.title}</p>
            </div>
            <div className={'column--2'}>
              <p>{internship.technologies.join(', ')}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
const internshipVisibility = {
  display: 'none'
}

Experience.propTypes = {
  jobs: PropTypes.array,
  internships: PropTypes.array
};
