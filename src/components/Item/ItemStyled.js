import styled from "styled-components";

const ItemStyled = styled.div`
  display: flex;
  border: 1px solid purple;
  /* margin: 1rem; */
  ${(props) => props.styles}
`;

export default ItemStyled;
