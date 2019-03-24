import React, { Component } from 'react';

class Skill extends Component {

	render(){
		return(
			<section class="skill">
                <header class="section-hd">
                    <span class="section-title-l"></span>
                    <h2 class="section-title">专业技能</h2>
                    <span class="section-title-r"></span>
                </header>
                <div class="section-bd">
                    <ul class="section-list">
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练应用Spring、Hibernate、Spring MVC等技术进行企业敏捷开发
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练使用Mysql、Hsql、Presto、Oracles数据库编程；
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练使用Activity工作流技术进行审批和工作流程开发；
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练使用 Yii、Yaf框架进行中后台系统及移动端数据接口开发、数据整理清洗、多层数据落地；
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练使用Redis、HDFS进行数据缓存;
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练运用Bootstrap、ECharts、Ajax、jQuery、Vue、TemplateJs、Highcharts 等前端技术及各种插件；
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            熟练使用Docker技术搭建 Nginx服务器及 Weblogic 、Tomcat、Fpm 等中间件，并实现MVC应用部署及较高要求的配置和管理操作；
                        </p></li>
                         <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            可运用SparkSQL进行数据分层落地和数据清洗
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            可运用SQL和数据表优化提高运行效率(SQL 语句常见的改造，索引应用，分区等)；
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            对SpringBoot、Redis、WebService、ActiveMQ、React有一定了解和认识，并可运用到项目开发中
                        </p></li>
                        <li><p class="section-content"><i class="iconfont icon-dot"></i>
                            了解JAVA多线程、JVM性能优化、设计模式
                        </p></li>
                    </ul>
                </div>
            </section>
			)
	}
}
export default Skill;