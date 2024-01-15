import React, { Component } from 'react'

const NewsItem=(props)=> {
  // render() {
    let {title,descripton,imgUrl,newsId,newsUrl,author,date,sourceName}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: "55vh"}}>
        <span style={{marginLeft: "-20%",zIndex:"1"}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {sourceName}
        </span>
          <img src={imgUrl} className="card-img-top" style={{height: "30vh"}} alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
              <p className="card-text">{descripton}</p>
              <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark ">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
// }

export default NewsItem







