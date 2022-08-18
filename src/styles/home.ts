import styled from "styled-components";

export const Container = styled.div`
  background: var(--black);
  color: var(--white);
`;

export const Divider = styled.div`
  position: absolute;
  left: 0;
  width: 100vw;
  min-width: 100vw;
  height: 1px;
  background: var(--dark-grey);
`;

export const ContainerWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;
