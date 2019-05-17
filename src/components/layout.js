/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import AUfooter, { AUfooterNav, AUfooterEnd } from '@gov.au/footer';

const Layout = ({ children }) => (
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
        <div>
          <main id="content">{children}</main>
          <div className="au-grid au-body">
            <AUfooter>
                <div className="container">
                <AUfooterNav>
                    <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h3 className="au-display-lg">Section</h3>
                        <ul className="au-link-list">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h3 className="au-display-lg">Section</h3>
                        <ul className="au-link-list">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    </div>
                </AUfooterNav>
                <div className="row">
                    <div className="col-sm-12">
                    <AUfooterEnd>
                        <p>Footer text</p>
                    </AUfooterEnd>
                    </div>
                </div>
                </div>
            </AUfooter>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
