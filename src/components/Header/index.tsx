import React from "react";

import { Container, Navigator, ButtonIcon } from "./styles";
import { FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Fabio</h1>
      </div>

      <div>
        <Navigator>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORKS</li>
            <li>CONTACT</li>
          </ul>
        </Navigator>
      </div>

      <div>
        <ButtonIcon>
          <FiLinkedin color="#2D7DD2" size={20} />
        </ButtonIcon>

        <ButtonIcon>
          <FiGithub color="#2D7DD2" size={20} />
        </ButtonIcon>

        <ButtonIcon>
          <FiMail color="#2D7DD2" size={20} />
        </ButtonIcon>

        <ButtonIcon>
          <FiPhone color="#2D7DD2" size={20} />
        </ButtonIcon>
      </div>
    </Container>
  );
};

export default Header;
