import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import data from './data'



function App() {
  const cards = data.map(item => {
    console.log(item)
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <NavBar />
      {cards}
    </div>
  )
}

export default App
