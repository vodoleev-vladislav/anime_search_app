import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 1rem;

  img {
    grid-column: 1 / span 1;
  }
`;
