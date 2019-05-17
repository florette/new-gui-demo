import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AUmainNav from '@gov.au/main-nav';

const Header = ({ siteTitle }) => (
  <header dark="true"
    style={{
      background: `#621a4b`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      </div>
      <AUmainNav dark>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Link to="/">Home</Link>
                    <Link to="/page-2/">Page 2</Link>
                </div>
            </div>
        </div>
      </AUmainNav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
