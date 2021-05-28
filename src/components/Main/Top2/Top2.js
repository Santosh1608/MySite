import classes from "./Top2.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class Top2 extends Component {
  render() {
    return (
      <div className={classes.Top2}>
        <button id={this.props.show ? classes.showClass : null}>
          {this.props.show ? (
            "Access Control"
          ) : (
            <i class="fa fa-plus" aria-hidden="true">
              {" "}
              Add Role
            </i>
          )}
        </button>
        <button className={classes.Edit}>
          {this.props.show ? (
            "Assigned Members"
          ) : (
            <i class="fa fa-trash" aria-hidden="true"></i>
          )}
        </button>
        <button
          className={classes.Trash}
          style={{ display: this.props.show ? "none" : "inline-block" }}
        >
          <i class="fa fa-user" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.showTeam,
  };
};
export default connect(mapStateToProps)(Top2);
