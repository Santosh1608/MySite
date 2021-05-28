import classes from "./Permissions.module.css";
import React, { Component } from "react";

class Permissions extends Component {
  render() {
    return (
      <div className={classes.Permissions}>
        <div>Permissions</div>
        <span>
          <input type="checkbox" disabled />
          <span>View items in access</span>
        </span>
        <span>
          <input type="checkbox" disabled />
          <span>Edit items in access</span>
        </span>
        <span>
          <input type="checkbox" checked />
          <span>Create items in access</span>
        </span>
        <span>
          <input type="checkbox" disabled />
          <span>Delete items in access</span>
        </span>
      </div>
    );
  }
}

export default Permissions;
