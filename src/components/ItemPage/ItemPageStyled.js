import styled from "styled-components";

export default styled.div`
  display: flex;
  padding: 4rem;
  background-image: linear-gradient(
      to right,
      rgba(25, 25, 25, 0.7),
      rgba(25, 25, 25, 0.5)
    ),
    url(${(props) => props.background || ""});
  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    background-image: none;
    padding: 0;
  }
  background-size: cover;
  background-position: center;
  font-family: "Asap", sans-serif;
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.small};
  height: 95vh;

  .poster {
    min-width: 25vw;
    width: 100%;
    /* max-height: 100%; */
    height: auto;
    border-radius: 1rem;

    &__container {
      width: auto;

      @media (max-width: ${(props) => props.theme.breakpoints.small}) {
        display: none;
      }
    }
  }

  .details {
    padding-left: 4rem;
    padding-right: 2rem;
    width: 100%;

    &__title {
      font-size: ${(props) => props.theme.fontSizes.large};
      margin-top: 1rem;
      margin-bottom: 1rem;

      &-main {
        margin-bottom: 0.5rem;
      }

      &-alts {
        list-style: none;
      }

      &-alt {
        font-size: ${(props) => props.theme.fontSizes.small};
      }
    }
    &__rating {
      &-box {
        display: flex;
        align-items: center;
        margin: 1rem 0;
      }
      &-text {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }
    }
    &__overview {
      font-size: ${(props) => props.theme.fontSizes.medium};
      margin-bottom: 1rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.small}) {
      background-image: linear-gradient(
          to right,
          rgba(25, 25, 25, 0.7),
          rgba(25, 25, 25, 0.5)
        ),
        url(${(props) => props.background || ""});
      background-size: cover;
      background-position: center;
      padding: 2rem;
      /* padding-top: 4rem; */
    }
  }
`;
