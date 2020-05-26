import styled from "styled-components";

export default styled.div`
  display: grid;
  height: 80vh;
  grid-template-columns: repeat(4, 1fr);
  /* margin: 2rem; */
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.7)
    ),
    url(${(props) => props.background || ""});
  background-size: cover;
  background-position: center;

  .poster {
    grid-column: 1 / span 1;
    margin: 3rem;
  }

  .description {
    grid-column: 2 / -1;

    &__title {
      font-size: 3rem;
    }
  }
`;
