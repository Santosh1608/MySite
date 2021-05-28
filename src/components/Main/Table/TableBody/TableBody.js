import classes from "./TableBody.module.css";
import React, { Component } from "react";
import AccessControl from "./AccessControl/AccessControl";
import Permissions from "./Permissions/Permissions";
import { connect } from "react-redux";
class TableBody extends Component {
  showClicked = (id) => {
    console.log(id);
    this.props.changeShowButton(id);
  };
  toggleClicked = (id) => {
    this.props.changeToggleButton(id);
  };
  render() {
    console.log(this.props.showTeam);
    return (
      <div className={classes.tBody}>
        {this.props.showTeam
          ? this.props.showTeam.map((team) => (
              <div className={classes.Toggle}>
                <div
                  key={team.id}
                  onClick={this.toggleClicked.bind(this, team.id)}
                  className={classes.Row}
                >
                  <div id={classes.TeamName}>
                    {" "}
                    {team.toggle ? (
                      <i class="fa fa-minus-circle" aria-hidden="true"></i>
                    ) : (
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    )}
                    {team.name}
                  </div>
                  <div
                    className={classes.TeamButton}
                    style={{
                      color: team.color,
                      borderRadius: "25px",
                      background: team.toggle ? "none" : team.backColor,
                      border: team.toggle ? "none" : `1px solid ${team.color}`,
                    }}
                  >
                    {team.toggle ? " " : team.access}
                  </div>
                  <div className={classes.Summary}>
                    {team.toggle ? " " : team.Summary}
                  </div>
                  <div className={classes.Last_updated}>
                    {team.Last_updated}
                  </div>
                  <label className={classes.switch}>
                    <input
                      type="checkbox"
                      checked={team.toggle ? true : false}
                    />
                    <span
                      onClick={this.toggleClicked.bind(this, team.id)}
                      className={`${classes.slider} ${classes.round}`}
                    ></span>
                  </label>
                </div>
                <div
                  style={{ display: team.toggle ? "block" : "none" }}
                  className={classes.Wrap}
                >
                  <p>All aspects in the {team.name}</p>
                  <div className={classes.More}>
                    <AccessControl />
                    <Permissions />
                  </div>
                </div>
              </div>
            ))
          : this.props.teams.map((team) => (
              <div className={classes.Show}>
                <div
                  key={team.id}
                  onClick={this.showClicked.bind(this, team.id)}
                  className={classes.Row}
                >
                  <div id={classes.TeamName}>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    {team.team}
                  </div>
                  <div
                    className={classes.TeamButton}
                    style={{
                      color: team.color,
                      background: team.backColor,
                      border: `1px solid ${team.color}`,
                    }}
                  >
                    {team.access}
                  </div>
                  <div className={classes.Total}>{team.total}</div>
                  <div>{team.Last_updated}</div>
                  <div>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showTeam: state.showTeam,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeShowButton: (id) => dispatch({ type: "CHANGE_SHOW", id }),
    changeToggleButton: (id) => dispatch({ type: "CHANGE_TOGGLE", id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
