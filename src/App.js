import React from 'react'
import Menu from './components/Menu'

const App = () => {
  return (

    <div className="App container-fluid  is-centered">
      {/* Title */}
      <section className="is-half pt-5 has-text-centered">
        <h1 className="title has-text-danger ">Frankie & Jaxon </h1>
        <h2 className="subtitle">
          A simple e-commerce webpage for icecream </h2>
      </section>

      {/* Filter */}
      <section className="columns mt-5 mb-6 py-3 is-centered has-background-light">
        <ul className="column is-half is-flex is-justify-content-space-between">
          <li><button className="button  is-link  is-small has-text-weight-bold">ALL</button> </li>
          <li><button className="button  is-primary is-small has-text-weight-bold ">CONO</button> </li>
          <li><button className="button  is-primary is-small has-text-weight-bold">COPPETTA</button> </li>
          <li><button className="button  is-primary is-small has-text-weight-bold">STICK</button> </li>
        </ul>
      </section>

      {/* Menu */}
      <section className="columns is-centered">
        <div className="column is-four-fifths">
          <Menu />
        </div>
      </section>
    </div>
  )
}

export default App