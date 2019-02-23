import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Header from "../header"
import "./layout.css"

export const Layout = ({ children, links }) => (
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
          <footer>
            <div className={'row layout--footer'}>
              <OutboundLink className={'column--3 col-centered'} href={links.linkedIn}>LinkedIn</OutboundLink>
              <OutboundLink className={'column--3 col-centered'} href={links.github}>Github</OutboundLink>
              <OutboundLink className={'column--3 col-centered'} href={links.email}>Contact</OutboundLink>
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