import React from 'react'

const Filter = () => {
    return (
        <>
            <section className="columns mt-5 mb-6 py-3 is-centered has-background-light">
                <ul className="column is-half is-flex is-justify-content-space-between">
                    <li><button className="button  is-link  is-small has-text-weight-bold">ALL</button> </li>
                    <li><button className="button  is-primary is-small has-text-weight-bold ">CONO</button> </li>
                    <li><button className="button  is-primary is-small has-text-weight-bold">COPPETTA</button> </li>
                    <li><button className="button  is-primary is-small has-text-weight-bold">STICK</button> </li>
                </ul>
            </section>
        </>

    )
}

export default Filter