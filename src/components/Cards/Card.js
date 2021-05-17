import React from 'react'
import CountUp from 'react-countup'

import Styles from './card.module.css'
const Card = (props) => {
  
  const {confirmed, recovered, deaths, type} = props
  const {CardName,cardSub} = props

  return (
    <div className={`m-4 mx-1 lg:w-2/12 md:w-1/3 min-w-max 
    w-full h-36 rounded ring ring-transparent 
    ${type=== 'active' ? Styles.active : 
      type=== 'recovered' ? Styles.recovered:
      Styles.deaths} `}  
    style={{backgroundColor:'#BD9DEA'}}>
    <div className="text-white text-left text-lg px-3 py-1">
      {CardName}
    <span className="block font-bold">  
    <CountUp
    start={0}
    end ={confirmed || recovered || deaths}
    duration={3}
    />
    </span>
    <span className="block">  Real date </span>
    <span className="font-light text-sm">  No. Of {cardSub} COVID-19 </span>
      </div>
    </div>
  )
}

export default Card
