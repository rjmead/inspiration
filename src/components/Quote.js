import React from 'react'

const Quote = ({ quote }) => {
    return (
        <div className="ui message">
            <h1 className="ui header">{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}

export default Quote