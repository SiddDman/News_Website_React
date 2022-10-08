// import React, { Component } from 'react'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
const News = (props) => {


    //IN FUNCTION BASED COMPONENTS WE WRITE PROPTYPES AND DEFAULT PROPS AT THE END
    // static defaultProps = {
    //     country: 'in',
    //     pageSize: '8',
    //     category: 'general'
    // }

    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number
    // }

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${this.capitalizeFirstLetter(props.category)}- RocketNews`;


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //RUN OREDER --> Constructor --> Render --> ComponentDidMount
    // constructor(props) {//runs before render
    //     super(props);

    // }

    // async updateNews() {
    const updateNews = async () => {
        props.setProgress(10)
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true })
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        console.log(parsedData)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false,
        // })
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }

    // async componentDidMount() {//runs after render
    //     this.updateNews();
    // }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}- RocketNews`;
        updateNews();
        // eslint-disable-next-line
    }, [])


    // const handleNextClick = async () => {
    //     // this.setState({ page: this.state.page + 1 })
    //     setPage(page + 1)
    //     // this.updateNews();
    //     updateNews();
    // }

    // const handlePrevClick = async () => {
    //     // this.setState({ page: this.state.page - 1 })
    //     setPage(page - 1)
    //     // this.updateNews();
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })
        // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults,
        //     loading: false,
        // })
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    // render() { //We write JSX in render method
    return (
        <>
            {/* <h1 className="container text-center my-4">RocketNews - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1> */}
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '80px', color: props.mode === 'light' ? 'black' : 'white' }}>RocketNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {/* {this.state.loading && <Spinner />} */}
            {loading && <Spinner />}
            <InfiniteScroll
                // dataLength={this.state.articles.length}
                // next={this.fetchMoreData}
                // hasMore={this.state.articles.length !== this.state.totalResults}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4> <Spinner /> </h4>}
            >
                <div className="container" >
                    <div className="row" >
                        {/* {this.state.articles.map((element) => { */}
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
    // } //render end 
}
News.defaultProps = {
    country: 'in',
    pageSize: '8',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}
export default News