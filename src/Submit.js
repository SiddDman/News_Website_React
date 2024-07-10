import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from 'react-router-dom';

const Submit = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQuery().get('query');
    
    const searchNews = async (query) => {
        console.log("Submit Page")
        query = props.searchInput
        console.log(query)
        console.log("ON submit page")
        if (query !== ' ') {
            props.setProgress(10)
            const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            props.setProgress(30)
            let parsedData = await data.json();
            props.setProgress(70)
            console.log(parsedData)
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
            props.setProgress(100)
            console.log("Success")
        }
    }
    
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.searchInput)}- RocketNews`;
        searchNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '80px', color: props.mode === 'light' ? 'black' : 'white' }}>RocketNews - Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4> <Spinner /> </h4>}
            >
                <div className="container" >
                    <div className="row" >
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
}
Submit.defaultProps = {
    country: 'in',
    pageSize: '8',
    searchInput: ' '

}

Submit.propTypes = {
    pageSize: PropTypes.number
}

export default Submit