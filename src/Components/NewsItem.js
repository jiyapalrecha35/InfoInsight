import React from 'react'

const NewsItem = ({ title, desc, Imageurl, newsUrl, author, time, src }) => {
    return (
        <div>
            <div className='my-4'>
                <div className="card">
                    <img src={Imageurl} className="card-img-top" alt="Newsimage" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <div>
                            <span style={{ zIndex: '1', left: '87%' }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{src}</span>
                        </div>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {time}</small></p>
                        <a rel="noreferrer" target="_blank" href={newsUrl} className="btn bnt-sm btn-dark">More About it</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

