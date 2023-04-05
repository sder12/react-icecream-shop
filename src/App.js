import React from 'react'
import Title from './components/Title'
import Menu from './components/Menu'

const App = () => {
  return (

    <div className="App container-fluid  is-centered">

      {/* Title */}
      <Title />

      {/* Filter & Menu */}
      <Menu />

    </div>

  )
}

export default App