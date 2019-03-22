import React, { Component } from 'react';
import './Desktop.css';
import Window from './Window.js';
import File from './File';

// open [] first, and then read the file from the desktop, finally close the file.
/*
file: not running 
app: is running
app = {
  file: file,
  z_index: number,
}
*/
class Desktop extends Component {
  constructor(props){
    super(props);

    this.desktop_files = this.props.home_dir.data;

    this.display_files = this.display_files.bind(this);
    this.display_app = this.display_app.bind(this);
  }

  //display by icon
  display_files(files) {
    return Object.keys(files).map((filename) => {
      let file = files[filename]
      return <File  file={file} open={this.props.open}/>;
    })
  }

  //display by window
  display_app(app){
    return <Window app={app} close={this.props.close} open={this.props.open} display_files={this.display_files} display_app={this.display_app} clickWin={this.props.clickWin} fullScreen={this.props.fullScreen}/>;
  }
  
  render() {
    let files = this.display_files(this.desktop_files);
    let windows = this.props.apps.map((app)=>{return this.display_app(app)})
    return (
      <div className="desktop">
        {files}
        {windows}
      </div>
    );
  }
}

export default Desktop;
