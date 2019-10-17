import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Quote from "./components/Quote"
import NextBtn from './components/NextBtn'

class App extends React.Component {
    state = {
        quoteText: "",
        bgImgURL: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
    }

    componentDidMount() {
        // make call to image api

        // make call to quotes api
    }

    getNextQuote() {
        console.log('Getting next quote...')
    }

    render() {
        const bgStyle = {backgroundImage: `url(${this.state.bgImgURL})`}
        return (
            <div className="App ui middle aligned center aligned grid" style={bgStyle}>
                <div className="column">
                    <div className="ui message">
                        Quote goes here
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))