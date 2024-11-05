import React from 'react'
import './Home.css'
import blob from '../../Assets/blob.png'
import cart from '../../Assets/cart.png'
import check from '../../Assets/check.png'
import board from '../../Assets/board.png'
import dash from '../../Assets/dash.png'
import hash from '../../Assets/hash.png'
import goals from '../../Assets/gaols.png'
import docs from '../../Assets/docs.png'
import rating from '../../Assets/rating.png'
import ratingLogos from '../../Assets/ratingLogos.png'

const Home = () => {
  return (
    <div className='home'>
        <img className='Background_on_the_top_right' src={blob} alt="" />
      <div className="left">
        <h1>One app to <br />
        replace them all.</h1>
        <p>All your work in one place:</p>
        <div className="work">
            <ul>
                <li>Task <img src={check} alt="" /></li>
                <li>Whiteboards <img src={board} alt="" /></li>
                <li>Dashboards <img src={dash} alt="" /></li>
            </ul>
            <ul>
                <li>Chat <img src={hash} alt="" /></li>
                <li>Goals <img src={goals} alt="" /></li>
                <li>Docs <img src={docs} alt="" /></li>
            </ul>
        </div>
        <input type="text" placeholder='Enter your work email' />
        <div className="btns">
        <button className='Get'>Get started for free</button>
        <button className='Free'>Free forever. <br /> No credit card.</button>
        </div>
        <img src={rating} alt="" />
        <img src={ratingLogos} alt="" />
      </div>
      <div className="right">
            <img src={cart} alt="" />
      </div>

    </div>
  )
}

export default Home
