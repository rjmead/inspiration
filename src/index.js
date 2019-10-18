import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import quotes from './quotes'
import unsplash from "./api/unsplash"
import Quote from "./components/Quote"
import NextBtn from './components/NextBtn'

class App extends React.Component {
    state = {
        quotes: [],
        curQuote: {},
        bgImgURL: "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
        imageList: [],
        imageIndex: 0,
        page: 1
    }

    componentDidMount() {
        // make call to image api
        this.getImageList(this.state.page)

        // make call to quotes api
        // fake api for now, all in one array so not going to make calls atm
        const rand = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({
            quotes: quotes,
            curQuote: quotes[rand]
        })
    }

    getImageList = async (page) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: "Nature",
                page: page,
                per_page: 30 // This is the max returned from the api
            }
        })
        console.log(response)

        this.setState({
            imageList: response.data.results,
            imageIndex: 0,
            page: page,
            bgImgURL: response.data.results[0].urls.regular
        })
    }

    getNextImg() {
        const nextIndex = this.state.imageIndex + 1
        if (nextIndex >= this.state.imageList.length){
            console.log('getImageList')
            this.getImageList(this.state.page + 1)
        } else {
            console.log('not getImageList')
            this.setState({
                bgImgURL: this.state.imageList[nextIndex].urls.regular,
                imageIndex: nextIndex
            })
        }
    }

    getNextQuote = () => {
        const rand = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({ curQuote: this.state.quotes[rand] })
        this.getNextImg()
    }

    render() {
        const bgStyle = {backgroundImage: `url(${this.state.bgImgURL})`}
        return (
            <div className="App ui middle aligned center aligned grid" style={bgStyle}>
                <div className="column">
                    <Quote quote={this.state.curQuote}/>
                    <NextBtn getNextQuote={this.getNextQuote}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))