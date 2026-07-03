import React from 'react'
function New(props) {
  return (
    <div>
      <h2>NEW COMPONENT</h2>
      <button onClick={props.data}>Get your data</button>
    </div>
  )
}

export default New;
