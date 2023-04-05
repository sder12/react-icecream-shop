import React from 'react'

const Error = () => {
    return (
        <>
            <div className="column pt-5 has-text-centered has-text-danger">
                <hr></hr>
                <h2 className="has-text-centered has-text-weight-semibold is-size-4"> Error </h2>
                <p>Sorry, there is an Internal Server Error</p>
                <p>Please reload the page or try later</p>
            </div >
        </>
    )
}

export default Error