import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Navbar, Nav, NavDropdown, Row, Col, Image, Dropdown, Form, Button } from 'react-bootstrap';
import { Heart, Bag, Search, ArrowRight } from 'react-bootstrap-icons';

const First = () => (
  <header>
    <p className="text-center py-3"><small>Free shipping on everything.</small></p>
  </header>
);

const Second = () => (
  <Navbar expand="sm" dark bg="white" pb-0>
    <Container>
      <Nav>
        <Nav.Item>
          <p className="p-2">Shipping to: US</p>
        </Nav.Item>
        <Nav.Item>
          <p className="p-2">Our Stores</p>
        </Nav.Item>
        <Nav.Item>
          <p className="p-2">RefRecycling</p>
        </Nav.Item>
      </Nav>
      <Nav>
        <Nav.Item>
          <NavDropdown id="nav" title={<Heart/>} className="pt-2 pb-2 ps-2"/>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown id="nav" title="Favorites" className="pt-2 pb-2 pe-2">
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your favorites is empty</NavDropdown.ItemText>
          </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown title="Sign in" className="p-2" id="nav"/>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown id="nav" title={<Bag/>} className="pt-2 pb-2 ps-2"/>
        </Nav.Item>
        <Nav.Item>
          <NavDropdown id="nav" icon={<Bag/>} title="Bag" className="pt-2 pb-2 pe-2">
            <NavDropdown.Item></NavDropdown.Item>
            <NavDropdown.ItemText>Your bag is empty</NavDropdown.ItemText>
          </NavDropdown>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);

const Third = () => (
<Row className="justify-content-md-center">
  <Col md={2}>
    <Image class="img-fluid mx-auto d-block" id="logo" src="https://www.thereformation.com/on/demandware.static/Sites-reformation-us-Site/-/default/dw3f496630/images/logo.svg"/>
  </Col>
</Row>
);

const Fourth = () => (
  <Row className="justify-content-center py-3">
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>New</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All New</Dropdown.Item>
          <Dropdown.Item href="#/action-2">New This Week</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Best Sellers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Clothing</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Clothing</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Basics</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Dresses</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Dresses</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Dresses</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Short Dresses</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Midi Dresses</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Tops</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Sleeveless Tops</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Short Sleeve Tops</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Long Sleeve Tops</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Jeans</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Jeans</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Bootcut Jeans</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Cropped Jeans</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Sweaters</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cardigans</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sleeveless Sweaters</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Sweatshirts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Weddings</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Bridal Salon</Dropdown.Item>
          <Dropdown.Item href="#/action-2">ll Weddings & Parties</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Bridal Dresses</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Shoes</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">New Shoes</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Best of Shoes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">All Shoes</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Collections</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Climate Credits</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Best Sellers</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Gift Cards</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <strong>Sustainability</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Sustainability at Ref</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sustainability report</Dropdown.Item>
          <Dropdown.Item href="#/action-3">RefScale</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col xs={1}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <Search/> <strong>Search</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <Form>
              <Form.Control type="text" placeholder="Search" width={50}/>
              <Button className="btn-light">
                <Search />
              </Button>
            </Form>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Col>
  </Row>
);

const Fifth = () => (
  <div><Image src="https://www.thereformation.com/on/demandware.static/-/Sites-reformation-us-Library/default/dw38b80d0d/images/Homepage2/flirt_desktop.jpg" width="100%"/>
    <Row id="centerText" className="align-items-center justify-content-center">
      <Col>
        <h1 id="flirt" className="py-3"><strong>You flirt</strong></h1>
        <h5><ArrowRight/> <strong>The Romance Collection</strong></h5>
      </Col>
    </Row>
  </div>
);

const Reformation = () => (
  <div className="d-flex flex-column min-vh-100">
    <First />
    <Second />
    <Third />
    <Fourth /><hr/>
    <Fifth />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Reformation />);