import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Preview } from "./Preview";
import articles from "./articles";

export class ListPosts extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    document.title = "L'impressionniste";
  }

  onButtonClick(id) {
    this.props.onButtonClick(id);
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-sm-center">
          {articles.Articles.slice(0, this.props.number).map((article, i) => {
            return (
              <Col xs="12" sm="8" md="6" lg="4" key={i}>
                <Preview
                  onButtonClick={this.onButtonClick}
                  key={i}
                  id={article.id}
                  title={article.title}
                  text={article.text}
                  date={article.date}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
