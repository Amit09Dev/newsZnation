import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import Navbar from './Navbar'
import InfiniteScroll from "react-infinite-scroll-component"


const News = (props) => {

const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)
const [search, setSearch] = useState(false)
const [inputvalue, setinputvalue] = useState('')



const capitalize = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1)
}

  const UpdateNews = async() =>{
    if (search) {
       let url=`https://newsapi.org/v2/everything?q=${inputvalue}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
       setLoading(true)
       let data= await fetch(url)
       let parsedData=await data.json()
       setArticles(parsedData.articles)
       setLoading(false)   
   }
        else {
            props.setProgress(10)
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}` 
            let data = await fetch(url)
            props.setProgress(30)
            let parsedData = await data.json()
            props.setProgress(60)
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
            props.setProgress(100)
        }
    }

  const fetchMoreData = async () => {
    if (search) {
        setPage(page+1)
        const url=`https://newsapi.org/v2/everything?q=${inputvalue}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
       setLoading(true)
        let data= await fetch(url)

        let parsedData=await data.json()
    
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)

    }
    else {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${(page + 1)}&pageSize=${props.pageSize}` 
        setPage(page + 1)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        if (articles.length === totalResults) {
            setLoading(false);
        }
    }
}

const handleFormSubmit = () =>{
    event.preventDefault();
    getInputValue();
}

// Custom Search

const getInputValue=async()=>{   
    event.preventDefault();  
    let inputVal = document.getElementById("inputId").value;
    document.title = `News Z Nation - ${capitalize(inputVal)}`
   setSearch(true)
   setinputvalue(inputVal)
   props.setProgress(10);
   let url=`https://newsapi.org/v2/everything?q=${inputVal}&apiKey=${props.apikey}&page=1&pagesize=${props.pageSize}`;
   setLoading(true)
   let data= await fetch(url)
   props.setProgress(60);
   let parsedData=await data.json()
   setArticles(parsedData.articles)
   setLoading(false)
   setTotalResults(parsedData.totalResults)
   setPage(1)
   props.setProgress(100);
}



    useEffect(() =>{
        document.title = `News Z Nation - ${capitalize(props.category)}`
        UpdateNews() //eslint-disable-next-line
    }, []) 

    return(
        <div className='container' style={{marginTop: '6rem', marginBottom: '3rem'}}>
    <Navbar searchengine={<form className="d-flex" role="search" onSubmit={handleFormSubmit}>
    <input className="form-control me-2" id='inputId' placeholder="Search News"  aria-label="Search" autoComplete="off" />
    <button className="btn btn-dark" type="button" onClick={getInputValue}>Search</button>
    </form> }/>
            <h2 className='text-center'>News Z Nation: Top {capitalize(inputvalue) ? (inputvalue) : (props.category)} Headlines</h2>
            {loading && <Spinner/>}

        <InfiniteScroll style={{overflow: 'hidden'}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/> }
          endMessage={ <p className='text-center mt-3'>------------------You have reaced the end-----------------</p>
          }
        >
            <div className="row mt-5">
                {articles.map((element)=>{
                    return (
                    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description } newsUrl={element.url} imageUrl={element.urlToImage} date={element.publishedAt} author={element.author}/>
                    </div>
                    )
                })}    
            </div>
            </InfiniteScroll>
        </div>
        )
}


News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    apikey: PropTypes.string
  };

News.defaultProps = {
pageSize: 9,
country: 'in',
category: 'general'
}

export default News