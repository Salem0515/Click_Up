import React from 'react'
import './Featuers.css'
import list from '../../Assets/list.png'
import ClickUpAi_logo from '../../Assets/ClickUpAi_logo.png'
import AiMenu from '../../Assets/AiMenu.png'
import projects_tasks from '../../Assets/projects_tasks.png'
const Featuers = () => {
  return (
    <div className='featuers'>
      <p>Join 800,000+ Highly Productive Teams</p>
        <img src={list} alt="" />

        <div className="Ai">
            <div className="text">
            <h1>Say Hi to <img src={ClickUpAi_logo} alt="" /></h1>
            <p>Meet the only AI solution that's custom-built for you. Work faster, write smarter,and ignite your creativity with hundreds of expert-crafted prompts for every usecase—right within ClickUp.</p>
            <button className='Discover'>Discover What's New</button>
            </div>
            <img src={AiMenu} alt="" />
        </div>

        <div className="otherFeatuers">
            <ul>
                <li>Project & Tasks</li>
                <li>Views</li>
                <li>chat</li>
                <li>Goals</li>
            </ul>
            <div className="components">
            <div className="paragraph">
                <h1>Simplify work and get <br />
                more done.</h1>
                <p>Plan, track, and manage any type of work with project <br />
                management that flexes to your team's needs.</p>
                <h6>REPLACES: Asana | Monday | Jira</h6>
                <button className='Started'>Get Started</button>
            </div>
            <div className="image"><img src={projects_tasks} alt="" /></div>
            
            </div>
        </div>


    </div>
  )
}

export default Featuers
