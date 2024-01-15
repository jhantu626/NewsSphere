import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News=(props)=>  {
  // static defaultProps = {
  //   country: "us",
  //   pageSize: 18,
  //   category: "general"
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(true);
  const [totalPage, setTotalPage] = useState(0);

  const capitalieTitle=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews=async (pagee)=> {
    props.setProgres(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pagee}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgres(30);
    let parseData = await data.json();
    console.log(parseData);
    props.setProgres(60);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false
    // });
    props.setProgres(100);
  }

  useEffect(() => {
    updateNews();
    document.title = `${capitalieTitle(props.category)} - Your News`;
    console.log(totalResults);
    /* eslint-disable-next-line padded-blocks */ 
  }, []);
  


  const handlePrevClick = async () => {
    updateNews(page - 1);
    // this.setState({
    //   page: this.state.page - 1
    // });
    setPage(page-1);
    console.log(page);
  }
  const handleNextClick = async () => {
    updateNews(page + 1);
    setPage(page+1);

    console.log(page);
  }

  // const fetchMoreData =async () => {
  //   // this.setState({ page: this.state.page + 1 });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   setPage(page+1);
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   console.log(parseData);
    
  //   setArticles(parseData.articles);
  //   setTotalResults(parseData.totalResults);
  //   setLoading(false);

  // };


    let { pageSize } = props;
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{ margin: "40px",marginTop:"90px" }}>YourNews - Top {capitalieTitle(props.category)} Headlines</h2>
        {/* {loading && <Spinner />} */}
        {/* <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length != totalResults}
          loader={<Spinner />}
        > */}
          <div className="container">
            <div className="row">
          


              {articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsItem title={element.title != null ? element.title.slice(0, 35) + "..." : ""}
                    descripton={element.description != null ? element.description.slice(0, 65) + "..." : ""} imgUrl={element.urlToImage}
                    newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} sourceName={element.source.name} />
                </div>
              })}


            </div>
            </div>
        {/* </InfiniteScroll> */}
        {loading && <Spinner />}

        <div className="container d-flex justify-content-between mt-5">
          <button disabled={page <= 1} onClick={handlePrevClick} type="button" className="btn btn-dark">&#8592;Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} onClick={handleNextClick} type="button" className="btn btn-dark">Next&#8594;</button>
        </div>
      </div>
    )
  }


export default News



News.defaultProps = {
  country: "us",
  pageSize: 18,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

// constructor(props) {
  //   super();
  //   console.log("Hello i am a constructor");
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults: 0,
  //     totalPages: 0
  //   };
  //   document.title = `${this.capitalieTitle(props.category)} - Your News`;
  // }







    // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e70b8188576a424ca31d0b3022da1dac&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });
  //   // let data = await fetch(url);
  //   // let parseData = await data.json();
  //   // console.log(parseData);
  //   // this.setState({
  //   //   articles: parseData.articles,
  //   //   totalResults: parseData.totalResults,
  //   //   loading: false
  //   // });
  //   // console.log(this.state.totalResults);
  //   this.updateNews();
  // }






  // this.setState({
    //   articles: this.state.articles.concat(parseData.articles),
    //   totalResults: parseData.totalResults,
    //   loading: false
    // });