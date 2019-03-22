import React, { Component } from 'react';
import './File.css';
import folder_svg from "../icon/folder.svg";
import txt_svg from "../icon/txt.svg"


class File extends Component{
  constructor(props){
    super(props);
    switch(this.props.file.type){
      case "folder":
        this.icon = folder_svg;
        break;
      case "txt":
        this.icon = txt_svg;
        break;
    }
  }

  render(){
    return (
      <div className="file file-click" onDoubleClick={()=>{this.props.open(this.props.file)}}>
        <div className="file-icon">
          <img src={this.icon}  className="file-icon-img"/>
        </div>
        <div className="file-name">
          {this.props.file.name}
        </div>
      </div>
    )
  }
}
  
export default File;