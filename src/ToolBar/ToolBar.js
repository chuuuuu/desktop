import React, { Component } from 'react';
import './ToolBar.css';
import {dateToString} from "../util/util.js"
import App from "./App.js";

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    setInterval(()=>{
      this.state.date = new Date();
      this.setState({
        date: this.state.date,
      })
    }, 1000);
  }

  render() {
    return (
    <div className="toolbar" style={{
      zIndex: this.props.apps.length,
    }}>
      <div className="toolbar-applist">
        <App type="folder" apps={this.props.apps}></App>
        <App type="txt" apps={this.props.apps}></App>
      </div>
      <div className="toolbar-setting">
        <div className="toolbar-setting-option toolbar-click">
          {dateToString(this.state.date)}
        </div>
      </div>
    </div>
    );
  }
}

export default ToolBar;
