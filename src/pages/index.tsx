import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <P>Hello World!</P>
    </div>
  );
};

const P = styled.p`
  color: var(--shape);
  font-size: 4rem;
`;

export default Home;
