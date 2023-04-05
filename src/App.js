import React from 'react'
import Menu from './components/Menu'

const App = () => {
  return (

    <div className="App container is-max-widescreen is-centered">
      {/* Title */}
      <section className="is-half pt-5 has-text-centered">
        <h1 className="title has-text-danger ">Frankie & Jaxon </h1>
        <h2 className="subtitle">
          A simple e-commerce webpage for icecream </h2>
      </section>

      {/* Filter */}
      <section className="columns my-5 py-3 is-centered has-background-light">
        <ul className="column is-half is-flex is-justify-content-space-between">
          <li><button className="button  is-link  is-small">ALL</button> </li>
          <li><button className="button  is-primary is-small">CONO</button> </li>
          <li><button className="button  is-primary is-small">COPPETTA</button> </li>
          <li><button className="button  is-primary is-small">STICK</button> </li>
        </ul>
      </section>

      {/* Menu */}
      <section className="columns is-centered">
        <div className="column is-four-fifths has-background-light">
          <Menu />
        </div>
      </section>
    </div>
  )
}

export default App