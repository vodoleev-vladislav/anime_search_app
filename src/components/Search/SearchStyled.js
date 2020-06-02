import styled from "styled-components";

const SearchStyled = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;

  & + * {
    padding-top: 5vh;
  }
`;

export default SearchStyled;
