import React, { useState, useEffect } from 'react'

function App() {
  // data is the variable setData manipulates the data variable
  const [data, setData] = useState([{}])
// useEffect uses /members route, and then it sets the data variable to the data it gets from the route
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof data.members === 'undefined') ? (
        <p>loading...</p>
      ): (
          data.members.map((member, index) => (
            <p key={index}>{member}</p>
          ))
      )}

    </div>
  )
}

export default App