import classes from "./TableHead.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class TableHead extends Component {
  render() {
    return (
      <div>
        <div className={classes.Row}>
          <div>Department/Role Name</div>
          <div className={classes.AccessLevel}>Access Level</div>
          <div className={classes.Summary}>
            {this.props.showTeam ? "Summary" : "No of members"}
          </div>
          <div>Last Updated</div>
          <div>{}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showTeam: state.showTeam,
  };
};
export default connect(mapStateToProps)(TableHead);
