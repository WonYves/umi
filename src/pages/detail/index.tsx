import React from 'react'
import { useParams } from 'umi'
interface Iparams{
  id: string
}
export default function Detail(props:any) {

  // const params = useParams<Iparams>()
  console.log(props)
    
  return (
    <div>Detl</div>
  )
}
