import type { NextPage } from "next";
import Header from "../components/Header";

import { Container } from "../styles/home";

const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <Header />
      </div>
    </Container>
  );
};

export default Home;
