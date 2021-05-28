import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Model from "./components/Model/Model";
import { connect } from "react-redux";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.model && <Model />}
        <Sidebar />
        <Main />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    model: state.model,
  };
};
export default connect(mapStateToProps)(App);
