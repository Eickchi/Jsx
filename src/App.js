import React, { Component} from 'react';

class App extends Component{
  render() {
    return (
       <div className="App">
            <div style={{border:solid ,'1px':black,maxWidth:'100vw',}}>

              <h1 className="title red">Your name here</h1>

              <br />

              <img src={require("./public/imageInSrc.jpg")}  />

              <br />

              <img src={require("./public/imageInPublic.jpg")} />

            </div>

        <video width="320" height="240" controls>

        <source src={require("myVideo.mp4")} type="video/mp4" / >

        </video>
      </div>
    );
  }
}
export default App;