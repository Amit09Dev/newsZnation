import {Component} from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render(){
        return(
            <div>
                <h4>This is a news app</h4>
                <NewsItem/>
            </div>
        )
    }
}