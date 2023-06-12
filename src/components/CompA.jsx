import React from 'react'
import Input from './Input'
import CompC from './CompC'

const CompA = () => {
  return (
    <div>
<div className="navbar">
    <h2>React app</h2>
</div>
      <div>
      <Input/>
      <CompC/>
      </div>
    </div>
  )
}

export default CompA
