import classes from "./Sidebar.module.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class Sidebar extends Component {
  render() {
    return (
      <>
        {
          <aside className={classes.SideMenu}>
            <div onClick={this.props.changeModelState}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </aside>
        }
        {
          <aside className={classes.Sidebar}>
            <div>
              <i class="fa fa-home" aria-hidden="true"></i>
              <h2>MYSITE</h2>
            </div>
            <div>
              <i class="fa fa-th-large" aria-hidden="true"></i>
              <p>Projects</p>
            </div>
            <div>
              <i class="fa fa-suitcase" aria-hidden="true"></i>
              <p>Organisation Profile</p>
            </div>
            <div>
              <i class="fa fa-user-secret" aria-hidden="true"></i>
              <p>Access Control</p>
            </div>
          </aside>
        }
        {this.props.model && (
          <aside className={classes.SidebarModel}>
            <div>
              <i class="fa fa-home" aria-hidden="true"></i>
              <h2>MYSITE</h2>
            </div>
            <div>
              <i class="fa fa-th-large" aria-hidden="true"></i>
              <p>Projects</p>
            </div>
            <div>
              <i class="fa fa-suitcase" aria-hidden="true"></i>
              <p>Organisation Profile</p>
            </div>
            <div>
              <i class="fa fa-user-secret" aria-hidden="true"></i>
              <p>Access Control</p>
            </div>
          </aside>
        )}
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeModelState: () => dispatch({ type: "CHANGE_MODEL" }),
  };
};
const mapStateToProps = (state) => {
  return {
    model: state.model,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
