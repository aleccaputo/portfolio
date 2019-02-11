import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import "./layout.css"

export const Layout = ({ children, socialMediaLinks }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <p>{console.log(JSON.stringify(socialMediaLinks))}</p>
          <footer>
            <div className={'row'} style={{margin: `0 100px 0 100px`}}>
              <a className={'column--3 col-centered'} href={socialMediaLinks.linkedIn}>LinkedIn</a>
              <a className={'column--3 col-centered'} href={socialMediaLinks.github}>Github</a>
              <a className={'column--3 col-centered'} href={socialMediaLinks.email}>Contact</a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  socialMediaLinks: PropTypes.object
}