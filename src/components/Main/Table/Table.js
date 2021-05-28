import classes from "./Table.module.css";
import React, { Component } from "react";
import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";
import { connect } from "react-redux";
class Table extends Component {
  render() {
    return (
      <div className={classes.Table}>
        <TableHead />
        <TableBody teams={this.props.teams} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    teams: state.teams,
  };
};
export default connect(mapStateToProps)(Table);
