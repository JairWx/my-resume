import React, { Component } from 'react';

// var ExperienceList = React.createClass({
//     render: function(){
//         return (
//             <div class="section-bd"></div>
//         )
//     }
// })
function ProjectView(props){
    return (
        <div class="section-bd">
        {props.value.map(function(project){
            return (
                <div class="item">
                    <header class="item-hd">
                        <span class="item-time">{project.date}</span>
                        <h3 class="item-name">{project.name}</h3>
                    </header>
                    <span class="item-hd-bottom"></span>
                    <div class="item-bd">
                        <p><b>项目规模:</b>{project.scale}</p>
                        <p><b>担任角色:</b>{project.role}</p>
                        <p><b>项目介绍:</b>{project.introduction}</p>
                        <p><b>开发技术:</b>{project.tools}</p>
                        <p><b>项目内容:</b></p>
                        <p>{project.content.map(function(value2,index){
                            return(<p>{index + 1}.{value2.value}</p>)
                        })}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
class Project extends Component {

	render(){
		return(
			<section class="project">
                <header class="section-hd">
                    <span class="section-title-l"></span>
                    <h2 class="section-title">项目经验</h2>
                    <span class="section-title-r"></span>
                </header>
                <ProjectView value={this.props.value}/>
            </section>
			)
	}
}
export default Project;