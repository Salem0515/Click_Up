import React from 'react'
import './Next.css'
import Link from '../../Assets/Link.png'
import next from '../../Assets/next.png'
import noti from '../../Assets/noti.png'
import customer_support from '../../Assets/customer_support.png'
import Vector from '../../Assets/Vector.png'
const Next = () => {
    return (
        <div className='next'>
            <div className="panar_one">
                <img src={Link} alt="" />
                <div className="writing">
                    <p>ClickUp has become such an integral part of our work! By <br />
                        putting our work on ClickUp and organizing it into Sprints, <br />
                        we made it easy to work across departments without <br />
                        overloading ourselves with meetings and email threads.</p>
                    <h4>Jakub, Inbound Marketing Team Lead, STX Next</h4>
                    <img className='next_img' src={next} alt="" />
                </div>
            </div>
            <div className="panar_two">
                <div className="write">
                <img className='note' src={noti} alt="" />
                <p>#1 Support in software</p>
                <h1>24/7 real-time <br />
                    support.</h1>
                <p>ClickUp has the highest rated client support in software. <br />
                    We're here 24 hours a day, every day of the week, including <br />
                    holidays.</p>
                    <ul>
                        <li><img src={Vector} alt="" />Email Support</li>
                        <li><img src={Vector} alt="" />Live Chat for Unlimited Plan+ Workspaces</li>
                        <li><img src={Vector} alt="" />Frequent Webinars</li>
                    </ul>
            </div>
            <img className='support' src={customer_support} alt="" />
            </div>

        </div>
    )
}

export default Next
