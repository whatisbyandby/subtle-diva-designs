import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  align-content: center;
  min-height: 300px;
  max-width: 33%;
  box-shadow: 2px 2px 10px grey;
`

const StyledCardFooter = styled.div``

const CardImage = () => {
  return (
    <div>
      <h2>Card Image</h2>
    </div>
  )
}

const CardFooter = () => {
  return <div></div>
}

const ProductCard = () => {
  return (
    <StyledCard>
      <CardImage />
      <CardFooter />
    </StyledCard>
  )
}

export default ProductCard
