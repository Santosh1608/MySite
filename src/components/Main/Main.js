import React, { Component } from "react";
import Top from "./Top/Top";
import TopOne from "./Top1/Top1";
import TopTwo from "./Top2/Top2";
import Table from "./Table/Table";
import TeamHeader from "./TeamHeader/TeamHeader";
import classes from "./Main.module.css";
import { connect } from "react-redux";
class Main extends Component {
  render() {
    console.log(this.props.model);
    return (
      <main style={{ maxHeight: this.props.model ? "100vh" : "initial" }}>
        <Top />
        <div>
          <div className={classes.Main}>
            <TopOne />
            {this.props.show ? <TeamHeader /> : null}
            <div className={classes.SubMain}>
              <TopTwo />
              <Table />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    show: state.showTeam,
    model: state.model,
  };
};
export default connect(mapStateToProps)(Main);
