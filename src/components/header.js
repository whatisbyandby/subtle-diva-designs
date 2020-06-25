import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Image from "./headerImage"

const Header = ({ siteTitle }) => (
  <header>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
