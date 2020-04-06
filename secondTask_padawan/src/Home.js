// ESSA PÁGINA DEVE SER REFATORADA APLICANDO PADRÃO DE SEPARAR COMPONENTES DE CONTAINER/LÓGICA
// DOS COMPONENTES DE APRESENTAÇÃO

import React from "react";
import "./SimplePage_css.css";

import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Footer } from "./Footer";

const balloon = {
  src: "balão.jpg",
  alt: "balão voando",
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  myMessage = () => {
    // eslint-disable-next-line no-alert
    alert(
      "WARNING: This website may potentially trigger seizures for people with photosensitive epilepsy. Viewer discretion is advised."
    );
  };

  handleMouseOver() {
    if (this.props.sobriety === "sober") {
      const newSobriety = "drunk";
      const newFont = "Sad_jane";
      this.props.onMouseOver(newSobriety, newFont);
    } else {
      this.props.onMouseOver("sober", window.orig_fontFamily);
    }
  }

  componentDidMount() {
    const elem = document.getElementById("main");
    window.orig_fontFamily = window
      .getComputedStyle(elem, null)
      .getPropertyValue("font-family"); // Variável global
    // this.props.setFont(window.orig_fontFamily);
  }

  render() {
    return (
      <div id="main" onLoad={this.myMessage}>
        <Jumbotron fluid className="text-center" style={{ marginBottom: 0 }}>
          <h1 id="fontTest">
            Your grow enceaudi. <br /> Cli more getents.
          </h1>
          <p>
            Quase que eu caio na ilusão! Na <b>ilusão!</b>
          </p>
        </Jumbotron>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Sobe</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Pra depois</Nav.Link>
              <Nav.Link href="#">Não</Nav.Link>
              <Nav.Link href="#">Cair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col xs={4}>
              <h2 id="js_test">This place aint the end of me</h2>
              <h5 onMouseOver={this.handleMouseOver}>Here I go:</h5>
              <div id="test_div" className="img" />
              <img id="balloon_img" src={balloon.src} alt={balloon.alt} />
              <p>
                Some text about me in culpa qui officia deserunt mollit anim..
              </p>
              <h3>Some Links</h3>
              <p>Lorem ipsum dolor sit ame.</p>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#home">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#home">
                    Disabled
                  </a>
                </li>
              </ul>
              <hr className="d-sm-none" />
            </Col>
            <Col>
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
              <br />
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>
                Sunt in culpa qui officia deserunt mollit anim id est laborum
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
/*
<Body onMouseOver={this.changeCondition}/>  onMouseOver é um prop do Componente Body
<h5 onMouseOver={this.handleMouseOver}>Here I go:</h5> onMouseOver é um evento associado ao elemento h5
*/
