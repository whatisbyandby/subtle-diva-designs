import React from "react"
import styled from "styled-components"
import ProductCard from "./productCard"

const cardData = [
  {
    productId: "123",
    productName: "Test Product",
    productDescription: "A Test Product",
  },
]

const StyledCardContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto;
`

const mapCardData = cardData.map(card => <ProductCard cardData={card} />)

console.log(mapCardData)

const cardContainter = () => {
  return <StyledCardContainer>{mapCardData}</StyledCardContainer>
}

export default cardContainter
