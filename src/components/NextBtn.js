import React from 'react'

const NextBtn = ({ getNextQuote }) => {
    return <button className="NextBtn ui button black" onClick={() => getNextQuote()}>Next Quote</button>
}

export default NextBtn