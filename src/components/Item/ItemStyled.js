import styled from "styled-components";

const ItemStyled = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 2rem;
  border: 1px solid black;
  padding: 1rem;
  height: 30rem;
  width: max(40rem, 30vw);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  font-family: "Asap", sans-serif;

  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    width: max(40rem, 45vw);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: max(48rem, 80vw);
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    display: block;
    max-height: 100%;
    border-radius: 1rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 1rem;
    font-size: ${(props) => props.theme.fontSizes.medium};

    &__bottom {
      display: flex;
      align-items: flex-end;
    }

    &__details {
      margin-right: auto;
    }

    &__title {
      font-size: ${(props) => props.theme.fontSizes.large};
      font-weight: 700;
      text-align: center;
      margin-bottom: auto;
    }

    &__rating-box {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    &__rating-text {
    }
  }
`;

export default ItemStyled;
