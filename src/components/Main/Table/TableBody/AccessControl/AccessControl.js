import classes from "./AccessControl.module.css";
import React, { Component } from "react";
class AccessControl extends Component {
  render() {
    return (
      <div className={classes.AccessControl}>
        <div>AccessControl</div>
        <div className={classes.Access}>
          <div>
            <input type="radio" disabled />
          </div>
          <div>
            <p>All access</p>
            <p>Can access all items</p>
          </div>
        </div>
        <div className={classes.Access}>
          <div>
            <input type="radio" checked />
          </div>
          <div>
            <p>Restricted access</p>
            <p>Can access only assigned things or created things</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccessControl;
