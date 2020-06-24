import styled from "styled-components"
import ProductCard from "./productCard"

const cardData = [
  {
    productId: "123",
    productName: "Test Product",
    productDescription: "A Test Product",
  },
]

const mapCardData = cardData.map(card => <ProductCard cardData={card} />)

const cardContainter = () => {
  return <StyledCardContainer>{}</StyledCardContainer>
}

export default cardContainter
