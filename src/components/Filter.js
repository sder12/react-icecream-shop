import React, { useEffect, useState } from 'react'

const Filter = () => {
    const [clickedFilter, setClickedFilter] = useState('all');
    const btnFilter = (value) => {
        setClickedFilter(value)
    }
    console.log(clickedFilter)

    return (
        <>
            <section className="columns mt-5 mb-6 py-3 is-centered has-background-light">
                <ul className="column is-half is-flex is-justify-content-space-between">
                    <li>
                        <button className={`button is-primary is-small has-text-weight-bold ${clickedFilter === 'all' ? 'is-link' : 'is-primary'}`}
                            onClick={() => btnFilter('all')}>
                            ALL
                        </button>
                    </li>
                    <li>
                        <button className={`button is-primary is-small has-text-weight-bold ${clickedFilter === 'cono' ? 'is-link' : 'is-primary'}`}
                            onClick={() => btnFilter('cono')}>
                            CONO
                        </button>
                    </li>
                    <li>
                        <button className={`button is-primary is-small has-text-weight-bold ${clickedFilter === 'coppetta' ? 'is-link' : 'is-primary'}`}
                            onClick={() => btnFilter('coppetta')}>
                            COPPETTA
                        </button>
                    </li>
                    <li>
                        <button className={`button is-primary is-small has-text-weight-bold ${clickedFilter === 'stick' ? 'is-link' : 'is-primary'}`}
                            onClick={() => btnFilter('stick')}>
                            STICK
                        </button>
                    </li>
                </ul>
            </section >
        </>

    )
}

export default Filter