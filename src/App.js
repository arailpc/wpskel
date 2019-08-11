import { hot } from "react-hot-loader/root";
import React from "react";
import $ from "jquery";
import Image from "./img/delete.svg";

class App extends React.Component {
  componentDidMount() {
    $("<h1 />")
      .text("hello1")
      .css({
        color: "red"
      })
      .appendTo($("header"));
  }
  render() {
    return (
      <React.Fragment>
        <Image className="icon" width={50} height={50} />
        <header />
        <hr />
        <span>hello</span>
        <div className="box" />
      </React.Fragment>
    );
  }
}

export default hot(App);
