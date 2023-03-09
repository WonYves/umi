import React from 'react'
import { Redirect, useLocation} from 'umi';
export default function _layout(props:any) {

  const location = useLocation()
  if(location.pathname === '/film' || location.pathname === '/film/'){
      return <Redirect to={'/film/nowplaying'}/>
  }

  return (
    <div>
      <div style={{background:'yellow', width: 600, height: 400}}>banner</div>
      {props.children}
    </div>
  )
}
