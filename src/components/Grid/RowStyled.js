import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${(props) => props.styles}
`;

export default Row;
