import React from 'react'
import { useState, useEffect } from "react";
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Newsimage from './Newsimage.jpg'


const News = ({ setProgress, Apikey, category, pageSize }) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }

    const updateNews = async () => {
        setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${Apikey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        setProgress(40)
        let parsedData = await data.json();
        setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        setProgress(100)

        document.title = `InfoInsight ~ ${capitalizeFirstLetter(category)}`
    }

    useEffect(() => {
        updateNews();
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${Apikey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)

        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        document.title = `InfoInsight ~ ${capitalizeFirstLetter(category)}`
    }
    return (
        <>
            {loading && <Spinner />}
            <h2 className='text-center' style={loading === true ? { marginTop: '5px' } : { marginTop: '80px' }}>
                InfoInsight's Top {capitalizeFirstLetter(category)} Headlines
            </h2>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}

                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-5">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={element.title ? element.title : ""} desc={element.description ? element.description.slice(0, 120) : ""}
                                    Imageurl={element.urlToImage ? element.urlToImage : Newsimage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} time={new Date(element.publishedAt).toGMTString()}
                                    src={element.source['name']} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
};

News.defaultProps = {
    pageSize: 6,
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string

}

export default News

