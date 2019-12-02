import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export class Head extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAccueil = this.handleClickAccueil.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
  }

  handleClickAccueil(e) {
    this.props.onAccueilClick();
  }

  handleClickAll() {
    this.props.onAllClick();
  }

  render() {
    return (
      <Container id="header">
        <Row>
          <Col md="4">
            <Nav className="justify-content-around" activeKey="/home">
              <Nav.Item>
                <Nav.Link onClick={this.handleClickAccueil} href="#">
                  Accueil
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.handleClickAll} href="#">
                  Tout les articles
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h1 id="title">{this.props.title}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

/*<Container id="header">
        <Row>
          <Col className="text-center" xs lg="4">
            <h1>Titre</h1>
          </Col>
          <Col xs lg>
            <Nav className="justify-content-around" activeKey="/home">
              <Nav.Item />
              <Nav.Item>
                <Nav.Link onClick={this.handleClickAccueil} href="#">
                  Accueil
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.handleClickAll} href="#">
                  Tout les articles
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>*/
