import styled from "styled-components";

const SearchStyled = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${(props) => props.theme.heights.header};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;

  .query {
    display: block;
    height: 3rem;
    width: 30rem;
    padding-right: 3rem;
    padding-left: 1rem;
    border-radius: 2rem;

    background-image: none;
    box-shadow: none;

    &__container {
      position: relative;
      margin-left: auto;
      margin-right: 5vw;
    }
  }

  .icon {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    right: 0;
    height: 2rem;
    width: 2rem;
  }

  & + * {
    padding-top: ${(props) => props.theme.heights.header};
  }
`;

export default SearchStyled;
