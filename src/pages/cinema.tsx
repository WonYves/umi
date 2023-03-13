import React, {useEffect} from 'react'

 function Cinema() {

  useEffect(() => {
    fetch('/api/mmdb/movie/v3/list/hot.json?ct=%E6%88%90%E9%83%BD&ci=59&channelId=4')
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div>Cinema</div>
  )
}

export default Cinema