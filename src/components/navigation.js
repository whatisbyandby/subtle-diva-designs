import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;

  .right-container {
    display: flex;
    flex-direction: column;
  }

  .cart-container {
    display: flex;
    justify-content: flex-end;
    h4 {
      margin: 1em;
    }
  }

  .link-container {
    display: flex;
    justify-content: flex-end;
    a {
      margin: 1em;
    }
  }
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className="logo-container">
        <h3>Logo</h3>
      </div>
      <div className="right-container">
        <div className="cart-container">
          <h4>Cart</h4>
          <h4>Search</h4>
        </div>
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
