import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        console.log("constructor");
        this.state={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e70b8188576a424ca31d0b3022da1dac&pageSize=21`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({articles: parseData.articles});
    }
    handleNextClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e70b8188576a424ca31d0b3022da1dac&pageSize=21&page=${this.state.page+1}`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({
            page: this.state.page+1,
            articles: parseData.articles
        });
    }
    handlePrevClick=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e70b8188576a424ca31d0b3022da1dac&pageSize=21&page=${this.state.page-1}`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({
            page: this.state.page-1,
            articles: parseData.articles
        });
    }


  render() {
    return (
        <div className='container my-3'>
            <h2>Top Headlines - NewsApp</h2>
            <div className="row">

                {this.state.articles.map((element)=>{
                return    <div key={element.url} className="col-md-4">
                        <NewsItem title={element.title!=null?element.title.slice(0,35)+"...":""}
                         description={element.description!=null?element.description.slice(0,50):""}
                         newsUrl={element.url} imageUrl={element.urlToImage} />
                    </div>
                })}
                

            </div>
            <div className="container d-flex justify-content-between">
                <button onClick={this.handlePrevClick} disabled={this.state.page<=1} type="button" className="btn btn-dark">&#8592;Previous</button>
                <button onClick={this.handleNextClick} type="button" className="btn btn-dark">Next&#8594;</button>
            </div>
        </div>
    )
  }
}

export default News