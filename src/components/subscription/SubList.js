import React from 'react'
import './SubList.css'
import Sub from './Sub'

const SubList = () => {
  return (
    <section className='main'>
        <div className="container">

            <div className="title">
                <h2>Pricing</h2>
                <div className="--line"></div>

                <div>
                    <p>Monthly</p>
                    <div>
                        <span className="toggle-btn">
                            <div className="ball"></div>
                        </span>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>

            <div className="sub-plans">
                <Sub />
            </div>

        </div>
    </section>
  )
}

export default SubList