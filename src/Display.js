import React from "react";
import { Head } from "./Head";
//import { Preview } from './Preview';
import { ListPosts } from "./ListPosts";
import { Post } from "./Post";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "" };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.accueilClick = this.accueilClick.bind(this);
    this.allClick = this.allClick.bind(this);
  }

  onButtonClick(id) {
    this.setState({ id: id });
  }

  accueilClick() {
    if (this.state.id !== "") {
      this.setState({ id: "" });
    }
  }

  allClick() {
    if (this.state.id !== "all") {
      this.setState({ id: "all" });
    }
  }

  render() {
    if (this.state.id === "") {
      return (
        <div>
          <Head
            title="Le Blog de l'Impressionniste"
            onAccueilClick={this.accueilClick}
            onAllClick={this.allClick}
          />
          <ListPosts number="3" onButtonClick={this.onButtonClick} />
        </div>
      );
    } else if (this.state.id === "all") {
      return (
        <div>
          <Head
            title="Le Blog de l'Impressionniste"
            onAccueilClick={this.accueilClick}
            onAllClick={this.allClick}
          />
          <ListPosts number="99" onButtonClick={this.onButtonClick} />
        </div>
      );
    } else {
      return (
        <div>
          <Head
            title=""
            onAccueilClick={this.accueilClick}
            onAllClick={this.allClick}
          />
          <Post id={this.state.id} />
        </div>
      );
    }
  }
}
/*

  */
