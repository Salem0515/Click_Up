import React from 'react'
import './Docs.css'
import Doc from '../../Assets/Doc.png'
import GreenDoc from '../../Assets/GreenDoc.png'
import pseudo from '../../Assets/pseudo.png'
import pseudotwo from '../../Assets/pseudotwo.png'
import pseudothree from '../../Assets/pseudothree.png'
import pseudofour from '../../Assets/pseudofour.png'
import pseudofive from '../../Assets/pseudofive.png'
import impor from '../../Assets/impor.png'
import eay from '../../Assets/eay.png'
import matule from '../../Assets/matule.png'
import checker from '../../Assets/checker.png'
import porject_tasks from '../../Assets/projects_tasks.png'


const Docs = () => {
  return (
    <div>
      <ul>
        <li>Docs</li>
        <li>Whiteboards</li>
        <li>Dashboards</li>
      </ul>
      <div className="Docs">
        <h1>The world's most powerful <br />
          (and fun) Docs.</h1>
        <img src={Doc} alt="" />
        <button className='start'>Get Started</button>
      </div>
      <div className="greendocs">
        <div className="left_side"><img className='green_file' src={GreenDoc} alt="" />
          <p>The Platform</p>
          <h1>Import to the <br />
            future of work <br />
            with one click.</h1>
          <p>Instantly import your work from other tools automatically. <br />
            Create a custom import to bring work in from excel or tools <br />
            that aren't supported.</p>

          <ul>
            <li><img src={pseudo} alt="" />Import</li>
            <li><img src={pseudothree} alt="" />Clickapps</li>
            <li><img src={pseudofive} alt="" />Automations</li>
          </ul>
          <ul>
            <li><img src={pseudotwo} alt="" />Download</li>
            <li><img src={pseudofour} alt="" />Integrations</li>
          </ul>
          <button className='start'>Get Started</button>
        </div>
        <div className="right_hand_side_img">
          <img src={impor} alt="" />
        </div>

      </div>

      <div className="Built">
        <p>Built for everyone</p>
        <h1>Built for teams from 1 to 1,000+.</h1>
        <ul>
          <li>Project Management</li>
          <li>Engineering</li>
          <li>Sales</li>
          <li>Marketing</li>
          <li>Product</li>
          <li>Design</li>
          <li>Finance</li>
          <li>HR</li>
          <li>IT</li>
        </ul>
        <div className="underneth">
        <div className="rightt">
          <ul>
            <li><img src={eay} alt="" /> <div className="para"><h4>Visualize & Plan</h4> <p>Manage any project from start to finish with highly <br />
              customizable views that make project planning a
              breeze.</p></div> </li>
            <li><img src={matule} alt="" />  <div className="para"><h4>Collaborate</h4> <p>Work with your team in real-time with Chat, assign <br />
              comments for action items, and never miss a beat
              with notifications that bring everything in one
              place.</p></div></li>
            <li><img src={checker} alt="" /> <div className="para"><h4>Track Progress</h4> <p>Add visual widgets for team members, tasks, <br />
              sprints, time tracking, statuses, docs, embeds, and
              more.</p></div> </li>
          </ul>
          <button className='Get'>Get Started</button>
        </div>
        <div className="leftt">
          <img src={porject_tasks} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Docs
