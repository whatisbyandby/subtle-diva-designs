import React from "react"
import Logo from "./logoImage"
import styled from "styled-components"
import { Link } from "gatsby"
import { GrCart } from "react-icons/gr"
import { FiSearch } from "react-icons/fi"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
  }

  .right-container {
    display: flex;
    flex-direction: column;
  }

  .cart-container {
    display: flex;
    justify-content: space-around;
    padding: 1em;
    a {
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .link-container {
    display: flex;
    justify-content: flex-end;
    a {
      margin: 1em;
      text-decoration: none;
    }
  }
`

const Navigation = () => {
  return (
    <StyledNavigation>
      <Link to="/" className="logo-container">
        <h2>Subtle Diva Logo</h2>
      </Link>
      <div className="right-container">
        <div className="cart-container">
          <a>
            <FiSearch size={"1.5em"} />
          </a>
          <a>
            <GrCart size={"1.5em"} />
          </a>
        </div>
        <div className="link-container">
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </StyledNavigation>
  )
}

export default Navigation
