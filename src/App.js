import React, { Component } from 'react';
import logo from './logo.svg';
import './style/main.css';
import './style/iconfont.css';
import Header from './component/Header';
import Practice from './component/Practice';
import Skill from './component/Skill';
import Project from './component/Project';
//export 当初两个类
//https://www.cnblogs.com/ifannie/p/8664851.html
//https://resume.congm.in/
let ss = <h1>Hello, world</h1>;
class App extends Component {
  render() {
    console.info("sss");
    return (
      <div>
        <p className="last-modified">最后更新时间：2019年03月{this.props.value.project[0].name}</p>
        <div className="content">
          <Header />
          <div className="content-bd">
            <Skill />
            <Practice />
            <Project value={this.props.value.project}/>
          </div>
        </div>
        <a className="pdf" href="resume.pdf"><i class="iconfont icon-pdf"></i> PDF简历</a>
      </div>
    );
  }
}
export default App;
