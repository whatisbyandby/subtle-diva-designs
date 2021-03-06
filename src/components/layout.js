/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Header from "./header"

const theme = {
  brandPrimary: "#55325a",
  fontPrimary: "#d8c3e3",
  backgroundColor: "purple",
  borderColor: "black",
  borderWidth: "2px",
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  main {
    height: 100%;
  }
`

const Layout = ({ children }) => {
  const [cartIsOpen, setCartOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <footer>{`© ${new Date().getFullYear()} Scott Perkins`}</footer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
