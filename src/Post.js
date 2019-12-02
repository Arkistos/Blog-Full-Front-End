import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./articles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TwitterShareButton } from "react-twitter-embed";

export class Post extends React.Component {
  componentDidMount() {
    let post = data.Articles.find(element => element.id === this.props.id);
    document.title = post.title;
  }

  render() {
    let post = data.Articles.find(element => element.id === this.props.id);
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" lg="8" className="text-center">
            <h1 id="header">{post.title}</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col id="post" xs="12" lg="8" className="text-center">
            <p dangerouslySetInnerHTML={{ __html: post.text }} />
            <TwitterShareButton
              options={{
                url: this.props.location,
                text: post.title,
                via: "limpressionnis1"
              }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
