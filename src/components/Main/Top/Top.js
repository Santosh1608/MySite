import classes from "./Top.module.css";
import React, { Component } from "react";

class Top extends Component {
  render() {
    return (
      <div className={classes.Top}>
        <i class="fa fa-question-circle" aria-hidden="true"></i>
        <i class="fa fa-bell" aria-hidden="true"></i>
        <p>Santhosh</p>
        <i class="fa fa-circle" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Top;
