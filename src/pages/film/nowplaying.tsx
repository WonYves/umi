import {useState} from 'react'
import { useHistory } from 'umi'
export default function Nowplaying() {

  const history = useHistory()
  const [list, setList] = useState([
    {
      id:1,
      name:'上海'
    },
    {
      id:2,
      name:'北京'
    },
    {
      id:3,
      name:'成都'
    },
  ])

  return (
    <div>

      <ul>
        {
          list.map((item) => {
            return <li key={item.id} onClick={() =>
              history.push(`/detail?id=${item.id}`)
            }>
              {item.name}
            </li>
          })
        }
      </ul>
    </div>
  )
}
