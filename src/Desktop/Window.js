import React, { Component } from 'react';
import './Window.css';

class Window extends Component {
  constructor(props) {
    super(props);
    
    this.display_content = this.display_content.bind(this);
  }  

  display_content() {
    switch(this.props.app.file.type){
      case "folder":
        return this.props.display_files(this.props.app.file.data);
      case "txt":
        return this.props.app.file.data;
    }
  }

  render() {
    let app = this.props.app;
    let magicNum = 5;

    let left_top_div = <div style={
      {
        position: "absolute",
        left: `${app.left-magicNum}px`,
        top: `${app.top-magicNum}px`,
        width: `${magicNum*2}px`,
        height: `${magicNum*2}px`,
        cursor: "nw-resize",
      }
    } onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
        
        app.width = width - delta_r.x;
        app.left = left + delta_r.x;

        app.height = height - delta_r.y;
        app.top = top + delta_r.y;    

        if(app.height < 300){
          app.height = 300;
          app.top = top + height - 300;
        }

        if(app.width < 300){
          app.width = 300;
          app.left = left + width - 300;
        }
      }
    }}  />;
    let top_div = <div style={
      {
        position: "absolute",
        left: `${app.left+magicNum}px`,
        top: `${app.top-magicNum}px`,
        width: `${app.width-2*magicNum}px`,
        height: `${magicNum}px`,
        cursor: "n-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
        app.height = height - delta_r.y;
        app.top = top + delta_r.y;  

        if(app.height < 300){
          app.height = 300;
          app.top = top + height - 300;
        }
      }
    }} />;
    let right_top_div = <div style={
      {
        position: "absolute",
        left: `${app.left+app.width-magicNum}px`,
        top: `${app.top-magicNum}px`,
        width: `${magicNum*2}px`,
        height: `${magicNum*2}px`,
        cursor: "ne-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
          app.width = width + delta_r.x;

          app.height = height - delta_r.y;
          app.top = top + delta_r.y;  

          if(app.width < 300){
            app.width = 300
          }

          if(app.height < 300){
            app.height = 300
            app.top = top + height - 300
          }
      }
    }} />;
    let left_div = <div style={
      {
        position: "absolute",
        left: `${app.left-magicNum}px`,
        top: `${app.top+magicNum}px`,
        width: `${magicNum}px`,
        height: `${app.height-2*magicNum}px`,
        cursor: "w-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
        app.width = width - delta_r.x;
        app.left = left + delta_r.x;  

        if(app.width < 300){
          app.width = 300;
          app.left = left + width - 300;
        }
      }
    }} />;
    let right_div = <div style={
      {
        position: "absolute",
        left: `${app.left+app.width}px`,
        top: `${app.top+magicNum}px`,
        width: `${magicNum}px`,
        height: `${app.height-2*magicNum}px`,
        cursor: "e-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }

        app.width = width + delta_r.x;

        if(app.width < 300){
          app.width = 300;
        }
      }
    }} />;
    let left_btm_div = <div style={
      {
        position: "absolute",
        left: `${app.left-magicNum}px`,
        top: `${app.top+app.height-magicNum}px`,
        width: `${magicNum*2}px`,
        height: `${magicNum*2}px`,
        cursor: "sw-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
        
        app.width = width - delta_r.x;
        app.left = left + delta_r.x;

        app.height = height + delta_r.y;

        if(app.width < 300){
          app.width = 300;
          app.left = left + width - 300
        }

        if(app.height < 300){
          app.height = 300
        }
      }
    }} />;
    let btm_div = <div style={
      {
        position: "absolute",
        left: `${app.left+magicNum}px`,
        top: `${app.top+app.height}px`,
        width: `${app.width-2*magicNum}px`,
        height: `${magicNum}px`,
        cursor: "s-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }
        
        app.height = height + delta_r.y;
        
        if(app.height < 300){
          app.height = 300
        }
      }
    }} />;

    let right_btm_div = <div style={
      {
        position: "absolute",
        left: `${app.left+app.width-magicNum}px`,
        top: `${app.top+app.height-magicNum}px`,
        width: `${magicNum*2}px`,
        height: `${magicNum*2}px`,
        cursor: "se-resize",
      }
    }onPointerDown={(e)=>{
      let mousePosInit = {
        x: e.clientX,
        y: e.clientY,
      }

      let left = app.left;
      let width = app.width;
      let height = app.height;
      let top = app.top;

      app.pointerMove=(e)=>{
        let delta_r = {
          x: e.x - mousePosInit.x,
          y: e.y - mousePosInit.y,
        }

        app.width = width + delta_r.x;  

        app.height = height + delta_r.y;
        
        if(app.width < 300){
          app.width = 300
        }

        if(app.height < 300){
          app.height = 300
        }
      }
    }} />;

    let style = {
      left: `${app.left}px`,
      top: `${app.top}px`,
      width: `${app.width}px`,
      height: `${app.height}px`,
    };

    return (
      <div style={{
        zIndex: `${app.zIndex}`,
      }} onPointerUp={()=>{app.pointerMove=()=>{}}} onPointerDown={()=>{this.props.clickWin(app)}}>
        {left_top_div}
        {top_div}
        {right_top_div}
        {left_div}
        {right_div}
        {left_btm_div}
        {btm_div}
        {right_btm_div}
        <div className="window" style={style}>
          <div className="window-bar" 
          onPointerDown={(e)=>{
            let mousePosInit = {
              x: e.clientX,
              y: e.clientY,
            }
      
            let left = app.left;
            let width = app.width;
            let height = app.height;
            let top = app.top;
                          
            app.pointerMove=(e)=>{
              let delta_r = {
                x: e.x - mousePosInit.x,
                y: e.y - mousePosInit.y,
              }
      
              app.left = left + delta_r.x;
              app.top = top + delta_r.y;
            }
          }}>
            <div className="window-bar-name">
              {app.file.name}
            </div>
            <div className="window-bar-setting">
              <div className="window-bar-setting-option">–</div>
              <div className="window-bar-setting-option" onClick={()=>{this.props.fullScreen(app)}}>O</div>
              <div className="window-bar-setting-option red-background" onClick={()=>{this.props.close(app)}}>X</div>
            </div>
          </div>
          <div className="window-content">
            {this.display_content()}
          </div>
        </div>
      </div>
    );
  }
}

export default Window;
