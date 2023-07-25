import PropTypes from 'prop-types'
import {Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import Error404 from '../assets/404error.gif'


export default class News extends Component {
  constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount (){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7407f1ab31a745f98769e247cd83262c&page=1&pageSize=${this.props.pageSize}` 
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState ({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePreviousClick = async() =>{
        console.log('Previous Click')
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` 
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () =>{
        if(!( this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` 
            this.setState({loading: true})
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
    }
}

    render(){
        return(
            <div className='container mt-3'>
                    <h2 className='text-center'>News Z Nation: Top Headlines</h2>
                    {this.state.loading && <Spinner/>}
                <div className="row mt-5">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return (
                    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 40).concat('...') : ''} description={element.description ? element.description.slice(0, 70).concat('...') : ''} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : Error404}/>
                    </div>
                    )
                })}    
                </div>
                <div className="container d-flex justify-content-between mt-4">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
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