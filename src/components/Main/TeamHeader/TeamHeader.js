import classes from "./TeamHeader.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class TeamHeader extends Component {
  render() {
    return (
      <div className={classes.TeamHeader}>
        <button onClick={() => this.props.removeShowTeam()}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <p>{this.props.teamName}</p>
        <i class="fa fa-comment" aria-hidden="true"></i>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeShowTeam: () => dispatch({ type: "REMOVE_SHOWTEAM" }),
  };
};
const mapStateToProps = (state) => {
  return {
    teamName: state.showTeamName,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamHeader);
