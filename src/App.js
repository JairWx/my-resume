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
    return (
      <div>
        <p class="last-modified">最后更新时间：2019年03月</p>
        <div class="content">
          <Header />
          <div class="content-bd">
            <Skill />
            <Practice />
            <Project />
          </div>
        </div>
        <a class="pdf" href="resume.pdf"><i class="iconfont icon-pdf"></i> PDF简历</a>
      </div>
    );
  }
}
export default App;
