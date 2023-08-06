import React from 'react'
import './Sub.css'

const Sub = ({ plan, theme }) => {
  return (
    <div className='price-box --card'>
        <div className={`box --p2 ${theme}`}>
            <p className='--text-light'>{plan}</p>

            <h4 className='--text-light'>
                <span>$</span>
                <span className='basic'>9.99</span>
            </h4>

        </div>

        <div className="features">
            <ul>
                <li>Unlimited Pages</li>
                <li>Unlimited Bandwidth</li>
                <li>500GB Storage</li>
            </ul>

            <button className={`btn ${theme}`}>Buy Now</button>
        </div>
    </div>
  )
}

export default Sub