import styled from "styled-components";

const SearchStyled = styled.header`
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;

export default SearchStyled;
