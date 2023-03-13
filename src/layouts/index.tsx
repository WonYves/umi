import React from 'react'
import { NavLink } from 'umi'
import './index.less'
export default function IndexLayout(props:any) {

  console.log(props)
  
  return (
    <div>
      {props.children}
      <ul className='ulbox' style={{width:'100%', height:50 , display:'flex'}}>
        <li style={{flex:1}}>
            <NavLink to={'/film'}>film</NavLink>
        </li>
        <li style={{flex:1}}>
            <NavLink to={'/cinema'}>cinema</NavLink>
        </li>
        <li style={{flex:1}}>
            <NavLink to={'/center'}>center</NavLink>  
        </li>
      </ul>
    </div>
  )
}
