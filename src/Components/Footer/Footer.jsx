import React from 'react'
import './Footer.css'
import Logo from '../../Assets/logo.png'
import badge from '../../Assets/badge.png'
import shilde from '../../Assets/shilde.png'
import time from '../../Assets/time.png'
import googleplay from '../../Assets/googlePlay.png'
import appstore from '../../Assets/appStor.png'
import title from '../../Assets/title.png'
import Linkedin from '../../Assets/linkedin.png'
import Facebook from '../../Assets/facebook.png'
import Twitter from '../../Assets/twitter.png'
import instgram from '../../Assets/instagram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_top">
                <img src={Logo} alt="" />
                <div className="privet">
                    <h1>One app to replace them all.</h1>
                    <p>All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>
                </div>
                <button className='Free_Forever'> Free Forever </button>
            </div>
            <div className="footer_middel">
                <ul>
                    <li><img src={badge} alt="" /><span>Free training &</span> 24-hours support</li>
                    <li><img src={shilde} alt="" />Serious about <span>security & privacy</span></li>
                    <li><img src={time} alt="" /><span>Highest levels of uptime</span> the last 12 months</li>
                </ul>
            </div>
            <div className="footer_bottom">
                <ul>
                    <li>ClickUp</li>
                    <li>Download</li>
                    <li>Careers</li>
                    <li>About Us</li>
                    <li>Product Roadmap</li>
                    <li>Press</li>
                    <li>Clients</li>
                    <li>Brand</li>
                    <li>Verified</li>
                    <li>Affiliate & Referrals</li>
                    <li>Reviews</li>
                    <li>Status</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Resources</li>
                    <li>On-Demand Demo</li>
                    <li>Webinars</li>
                    <li>Contact Us</li>
                    <li>Templates</li>
                    <li>Import</li>
                    <li>API</li>
                    <li>Consultants</li>
                    <li>Partners</li>
                    <li>ClickUp University</li>
                    <li>Events</li>
                </ul>
                <ul>
                    <li>Features</li>
                    <li>Gantt Chart</li>
                    <li>Dashboards</li>
                    <li>Native Time Tracking</li>
                    <li>Mind Maps</li>
                    <li>Automations</li>
                    <li>Notepad</li>
                    <li>Integrations</li>
                    <li>Email</li>
                    <li>To-Do List</li>
                    <li>Kanban Board</li>
                    <li>Sprints</li>
                </ul>
                <ul>
                    <li>Compare</li>
                    <li>vs Monday</li>
                    <li>vs Asana</li>
                    <li>vs Jira</li>
                    <li>vs Trello</li>
                    <li>vs Airtable</li>
                    <li>vs Airtable</li>
                    <li>vs Basecamp</li>
                    <li>vs Wrike</li>
                    <li>vs MS Project</li>
                    <li>vs Todoist</li>
                    <li>vs Smartsheet</li>
                </ul>
                <ul>
                    <li>Blog</li>
                    <li>Software Team Hub</li>
                    <li>Agency Hub</li>
                    <li>PM Software Guide</li>
                    <li>Newsletter</li>
                    <li>Podcast</li>
                    <li><img src={googleplay} alt="" /></li>
                    <li><img src={appstore} alt="" /></li>
                </ul>
            </div>
            <div className="lastly">
                <div className="left_footer">
                    <img src={title} alt="" />
                    <p>© 2023 ClickUp
                        Security
                        Your Privacy
                        Terms</p>
                </div>
                <div className="right_footer">
                    <img src={Linkedin} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={instgram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer
