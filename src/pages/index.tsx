import type { NextPage } from "next";
import Header from "../components/Header";
import Main from "../components/Main";

import { Container, Divider, ContainerWrapper } from "../styles/home";

const Home: NextPage = () => {
  return (
    <Container>
      <ContainerWrapper>
        <Header />
        <Divider />
        <Main />
        <Divider />
      </ContainerWrapper>
    </Container>
  );
};

export default Home;
