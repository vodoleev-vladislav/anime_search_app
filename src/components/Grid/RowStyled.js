import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${(props) => props.styles}
`;

export default Row;
