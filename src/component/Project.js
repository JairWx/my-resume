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
                    <div class="item-bd">
                        <p>项目规模{project.scale}</p>
                        <p>担任角色:{project.role}</p>
                        <p>项目介绍:{project.introduction}</p>
                        <p>开发技术:{project.tools}</p>
                        <p>项目内容:</p>
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