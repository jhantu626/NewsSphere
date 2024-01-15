import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description,newsUrl,imageUrl}=this.props;
    return (
        <div className='my-3'>
            <div className="card" style={{ width: "18rem", height: "45vh" }}>
                <img src={imageUrl} className="card-img-top" style={{ height: "20vh" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark ">Go somewhere</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem