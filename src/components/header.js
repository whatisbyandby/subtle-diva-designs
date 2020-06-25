import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header>
    <Navigation />
    <Image />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
