import React, { Component } from 'react';
import './App.css';
import folder_svg from "../icon/folder.svg";
import txt_svg from "../icon/txt.svg"

class App extends Component{
  constructor(props){
    super(props);
    switch(this.props.type){
      case "folder":
        this.icon = folder_svg;
        break;
      case "txt":
        this.icon = txt_svg;
        break;
      default:
        console.log("unknown file type");
    }
  }

  render() {
    let apps = this.props.apps.filter((app)=>{
      return app.file.type == this.props.type;
    })

    return(
      <div className="app app-click">
        <div className="app-icon">
          <img src={this.icon} className="app-icon-img"/>
        </div>
        <div className="app-icon-dot">
          {apps.length == 0? "" : "."}
        </div>
      </div>  
    );
  }
}

export default App;