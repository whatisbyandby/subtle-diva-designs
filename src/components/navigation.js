import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </StyledNavigation>
  )
}

export default Navigation
