import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//import Col from "react-bootstrap/Col";

export class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onButtonClick(this.props.id);
  }

  render() {
    return (
      <Card
        id="cardPreview"
        style={{ height: "19rem" }}
        className="text-center"
      >
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{this.props.title}</Card.Title>
          <Button
            className="mt-auto"
            onClick={this.handleClick}
            variant="primary"
          >
            Read This
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{this.props.date}</Card.Footer>
      </Card>
    );
  }
}
