import $ from "jquery";

$("<h1 />")
  .text("hello")
  .css({
    color: "red"
  })
  .appendTo($("header"));
