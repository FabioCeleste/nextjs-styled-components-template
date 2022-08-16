import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  h1 {
    font-size: 2rem;
  }

  div {
    display: flex;
  }
`;
export const Navigator = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    li {
      margin: 0 16px;
      cursor: pointer;
      filter: brightness(0.8);

      transition: all ease-in-out 400ms;
    }

    li:hover {
      filter: brightness(2);
      text-decoration: underline;
    }
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 8px;

  height: 28px;
  width: 28px;
  border-radius: 4px;
  background: var(--white);
  transition: all ease-in-out 200ms;

  cursor: pointer;

  &:hover {
    background: var(--light-grey);
  }
`;
