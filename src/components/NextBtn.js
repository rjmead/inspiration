import React from 'react'

const NextBtn = ({ getNextQuote }) => {
    return <button className="NextBtn ui button" onClick={() => getNextQuote()}>Next Quote</button>
}

export default NextBtn