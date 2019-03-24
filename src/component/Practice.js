import React, { Component } from 'react';

class Practice extends Component {

	render(){
		return(
			<section class="practice">
                    <header class="section-hd">
                        <span class="section-title-l"></span>
                        <h2 class="section-title">工作经历</h2>
                        <span class="section-title-r"></span>
                    </header>
                    <div class="section-bd">
                        <div class="item">
                            <header class="item-hd">
                                <span class="item-time">2018.02 ~ 至今</span>
                                <a class="btn item-more" href="http://mi.com" target="_blank">工作</a>
                                <h3 class="item-name">小米科技有限责任公司</h3>
                            </header>
                            <div class="item-bd">
                                <p class="section-content">
                                    <strong>主要负责中后台开发，及数据支持</strong>
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <header class="item-hd">
                                <span class="item-time">2014.12 ~ 2016.07</span>
                                <a class="btn item-more" href="http://www.nantian.com.cn/" target="_blank">实习+工作</a>
                                <h3 class="item-name">北京南天软件有限公司</h3>
                            </header>
                            <div class="item-bd">
                                <p class="section-content">
                                    <strong>银行系统开发，自动化运维工具开发</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
			)
	}
}

export default Practice;