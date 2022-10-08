// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component {
const NewsItem = (props) => {

    // let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ border: props.mode === 'light' ? " " : '2px solid white', borderRadius: props.mode === 'light' ? '' : '5px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={imgUrl ? imgUrl : "https://minerescue.org/wp-content/uploads/2020/03/Marketplace-Lending-News.jpg"} className="card-img-top" alt="..." />
                <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }}>
                    <h5 className="card-title" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{title}</h5>
                    <p className="card-text" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{description}</p>
                    <p className="card-text" style={{ color: props.mode === 'light' ? 'black' : 'white' }}><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div >
    )

}

export default NewsItem