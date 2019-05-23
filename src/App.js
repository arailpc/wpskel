import React from "react";
import $ from "jquery";

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
        <header />
        <hr />
        <div className="box" />
      </React.Fragment>
    );
  }
}
