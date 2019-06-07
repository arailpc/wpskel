import React from "react";
import $ from "jquery";
import Image from "./img/delete.svg";

export default class App extends React.Component {
  componentDidMount() {
    $("<h1 />")
      .text("hello")
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
        <div className="box" />
      </React.Fragment>
    );
  }
}
