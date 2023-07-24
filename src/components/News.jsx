import {Component} from 'react'
import NewsItem from './NewsItem'

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
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7407f1ab31a745f98769e247cd83262c&page=1&pageSize=15' 
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState ({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePreviousClick = async() =>{
        console.log('Previous Click')
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page - 1}&pageSize=15` 
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handleNextClick = async () =>{
        if(this.state.page +1 > Math.ceil(this.state.totalResults/15)){
            console.log('Next')
        }
        else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7407f1ab31a745f98769e247cd83262c&page=${this.state.page + 1}&pageSize=15` 
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page : this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render(){
        return(
            <div className='container mt-3'>
                    <h4 className='text-center'>News Z Nation: Top Headlines</h4>
                <div className="row mt-5">
                {this.state.articles.map((element)=>{
                    return (
                    <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 40).concat('...') : ''} description={element.description ? element.description.slice(0, 70).concat('...') : ''} newsUrl={element.url} imageUrl={element.urlToImage}/>
                    </div>
                    )
                })}    
                </div>
                <div className="container d-flex justify-content-between mt-4">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={false} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}