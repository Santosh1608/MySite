import classes from "./Model.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class Model extends Component {
  render() {
    return (
      <div
        onClick={this.props.changeModelState}
        className={classes.Model}
      ></div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeModelState: () => dispatch({ type: "CHANGE_MODEL" }),
  };
};
export default connect(null, mapDispatchToProps)(Model);
