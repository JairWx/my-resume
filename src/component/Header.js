import React, { Component } from 'react';

class Header extends Component {

  render(){
    return(
      <header class="content-hd">
            <section class="title">
                <div class="name">
                    <h1>温杰<small>Wen Jie</small></h1>
                </div>
                <div className="job">
                    <h2>Java开发工程师</h2>
                </div>
            </section>
            <section class="info">
                <h2>1991.10</h2>
                <h2>中北大学 · 软件工程</h2>
                <h2>本科 / 2015年毕业</h2>
            </section>
            <section class="contact">
                <ul>
                    <li><a href="http://www.nobuger.com" target="_blank"><span class="contact-link">nobuger.com</span><i class="iconfont icon-homepage"></i></a></li>
                    <li><a href="https://github.com/jairwx" target="_blank"><span class="contact-link">github.com/jairwx</span><i class="iconfont icon-github"></i></a></li>
                    <li><a href="mailto:py_wj@163.com" target="_blank"><span class="contact-link">py_wj@163.com</span><i class="iconfont icon-email"></i></a></li>
                    <li><a href="tel:1851966****" target="_blank"><span class="contact-link">1851966****</span><i class="iconfont icon-phone"></i></a></li>
                </ul>
            </section>
        </header>
      )
  }
}

class Header2 extends Component {

  render() {
  	const divList = [
	{clazz: 'allTasks', name: '全部任务'}, 
	{clazz: 'handleVclazzeo', name: '待处理视频'}, 
	{clazz: 'passVclazzeo', name: '已通过视频'}, 
	{clazz: 'misdeedVclazzeo', name: '违规视频'}, 
	{clazz: 'dataAnalysis', name: '数据分析'}]
    return (
	<div className={'vclazzeo'}>
      {
        divList.map((div, index) => {
          return (
            <div
              className={`${div.clazz} fl`}>
              {div.name}
            </div>
          );
        })
      }
    </div>
    );
  }
}

export default Header;