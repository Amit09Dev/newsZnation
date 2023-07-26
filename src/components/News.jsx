import PropTypes from 'prop-types'
import {Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";   


export default class News extends Component {

capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
  constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1, 
            totalResults: 0
        }
        document.title = `News Z nation ${this.capitalize(this.props.category)}`
        //                                 
    }

    UpdateNews = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page}&pageSize=${this.props.pageSize}` 
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState ({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` 
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState ({
            page: this.state.page + 1,
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

     componentDidMount = async () =>{
        this.UpdateNews()
    }

//     handlePreviousClick = () =>{
//         this.setState({page: this.state.page - 1})
//         this.UpdateNews()
//     }

//     handleNextClick =  () =>{
//     this.setState({page: this.state.page + 1})
//     this.UpdateNews()
// }

render(){
    return(
        <div className='container' style={{marginTop: '6rem'}}>
            <h2 className='text-center'>News Z Nation: Top {this.capitalize(this.props.category)} Headlines</h2>
            {this.state.loading && <Spinner/>}

        <InfiniteScroll style={{overflow: 'hidden'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
            <div className="row mt-5">
                {this.state.articles.map((element)=>{
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
}


News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

News.defaultProps = {
pageSize: 9,
country: 'in',
category: 'general'
}