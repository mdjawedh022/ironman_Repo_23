import React from 'react'
import { useSelector } from 'react-redux'

const CompC = () => {
  const data=useSelector((store)=>store.data);
  console.log(data)
    return (
    <div >
      
      <h1>{data}</h1>
    </div>
  )
}

export default CompC
