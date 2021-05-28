import classes from "./Top1.module.css";
import React, { Component } from "react";

class Top1 extends Component {
  render() {
    return (
      <div className={classes.Top1}>
        <div className={classes.Top1Buttons}>
          <button>
            <i class="fa fa-wifi" aria-hidden="true"></i>
            Permission
          </button>
          <button>
            <i class="fa fa-th" aria-hidden="true"></i>
            Approval Matrix
          </button>
        </div>
        <button className={classes.Top1para}>
          <i class="fa fa-refresh" aria-hidden="true"></i>
          Last synced 15 min age
        </button>
      </div>
    );
  }
}

export default Top1;
