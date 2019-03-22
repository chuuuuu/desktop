import React, { Component } from 'react';
import './Blog.css';
import Desktop from './Desktop/Desktop.js';
import ToolBar from './ToolBar/ToolBar.js';
import data from "./Datebase/data.json";

//unit: pixel 
class Blog extends Component {
  constructor(){
    super();
    this.state = {
      apps: [],
    }
    this.appsZIndex = [];

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.fullScreen = this.fullScreen.bind(this);

    this.pointerMove = this.pointerMove.bind(this);

    this.updateZIndex = this.updateZIndex.bind(this);
    this.clickWin = this.clickWin.bind(this);
  }

  componentDidMount(){
    document.addEventListener("pointermove", this.pointerMove)
  }

  componentWillUnmount(){
    document.removeEventListener("pointermove", this.pointerMove)
  }


  open(file) {
    let app = {
      file: file,

      isPointerDown: false,
      left: 300,
      top: 300,
      height: 300,
      width: 300,
      zIndex: 0,
      pointerMove: (e)=>{},
    };

    this.state.apps.push(app);
    this.appsZIndex.unshift(app);
    this.updateZIndex();
    this.setState({
      apps: this.state.apps,
    })

    return app;
  }

  close(app) {
    let idx = this.state.apps.findIndex((emt)=>{return emt == app;});
    this.state.apps.splice(idx, 1);
    this.setState({
      apps: this.state.apps,
    });
  }

  fullScreen(app){
    app.left = 0;
    app.top = 0;
    app.width = window.innerWidth;
    app.height = window.innerHeight-70;
    
    this.setState({
      apps: this.state.apps,
    });
  }

  pointerMove(e) {
    this.state.apps.forEach((app) => {
      app.pointerMove(e);
    });

    this.setState({
      apps: this.state.apps,
    });
  }

  updateZIndex(){    
    // 0~this.appsZIndex.length-1
    for(let i=0; i<this.appsZIndex.length; i++){
      this.appsZIndex[i].zIndex = this.appsZIndex.length-i;
    }
    this.setState({
      apps: this.state.apps,
    });
  }

  clickWin(app){
    let idx = this.appsZIndex.findIndex((emt)=>{return emt == app;});
    this.appsZIndex.splice(idx, 1);
    this.appsZIndex.unshift(app);
    this.updateZIndex();
  }

  render() {
    return (
      <div className="blog">
        <div className="blog-desktop">
          <Desktop apps={this.state.apps} open={this.open} close={this.close} home_dir={data["home"]} pointerDownWinBar={this.pointerDownWinBar} pointerUpWinBar={this.pointerUpWinBar} clickWin={this.clickWin} fullScreen={this.fullScreen}/>
        </div>
        <div className="blog-toolbar">
          <ToolBar apps={this.state.apps} close={this.close}/>
        </div>
      </div>
    );
  }
}

export default Blog;
