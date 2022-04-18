import { Button, ButtonGroup, Container, Navbar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MetamaskLogin from '../MetamaskLogin/MetamaskLogin';

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Row>
          <ButtonGroup>
            <Button>Main Game</Button>
            <Button>Market Place</Button>
            <Button>Buy STEALTH</Button>
          </ButtonGroup>
        </Row>

        <Row>
          <MetamaskLogin />
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
