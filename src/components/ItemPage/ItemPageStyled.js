import styled from "styled-components";

export default styled.div`
  display: flex;
  padding: 4rem;
  background-image: linear-gradient(
      to right,
      rgba(50, 50, 50, 0.7),
      rgba(50, 50, 50, 0.5)
    ),
    url(${(props) => props.background || ""});
  background-size: cover;
  background-position: center;
  font-family: "Asap", sans-serif;
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.small};

  .poster {
    width: 35rem;
    height: 100%;
    border-radius: 1rem;
  }

  .details {
    /* background-image: linear-gradient(
      to right,
      rgba(50, 50, 50, 0.7),
      rgba(50, 50, 50, 0.5)
    ),
    url(${(props) => props.background || ""});
    background-size: cover;
    background-position: center; */
    padding-left: 4rem;
    padding-right: 2rem;
    
    &__title {
      font-size: ${(props) => props.theme.fontSizes.large};
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    &__rating {
      &-box {
        display: flex;
        align-items: center;
      }
      &-text {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }
    }
    &__overview {
      font-size: ${(props) => props.theme.fontSizes.medium};
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }
`;
