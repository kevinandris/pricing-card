import { useState } from 'react'
import './SubList.css'
import Sub from './Sub'

const SubList = () => {

    const [basic, setBasic] = useState(9.99);
    const [pro, setPro] = useState(19.99);
    const [master, setMaster] = useState(29.99);

    const [yearly, setYearly] = useState(false);

    const handleClick = () => {
        setYearly(!yearly);
    }
    
    return (
        <section className='main'>
            <div className="container --center-all">

                <div className="title">
                    <h2>Pricing</h2>
                    <div className="--line"></div>

                    <div className='--flex-center --my2'>
                        <p>Monthly</p>
                        <div className='--mx2'>
                            <span className={yearly ? "toggle-btn toggled" : "toggle-btn"} onClick={handleClick}>
                                <div className={yearly ? "ball move" : "ball"}></div>
                            </span>
                        </div>
                        <p>Yearly</p>
                    </div>
                </div>

                <div className="sub-plans">
                    <Sub plan={"Basic"} theme={"theme1"} price={basic} isBasic={true} yearly={yearly}/>
                    <Sub plan={"Pro"} theme={"theme2"} price={pro} isPro={true} yearly={yearly}/>
                    <Sub plan={"Master"} theme={"theme3"} price={master} isMaster={true} yearly={yearly}/>
                </div>

            </div>
        </section>
    )
}

export default SubList