import {Component} from 'react'
import PropTypes from 'prop-types'

export default class NewsItem extends Component{

    render(){
  let {title, description, imageUrl, newsUrl} = this.props
        return(
            <div>
               <div className="card mt-3" style={{ height: '370px'}}>
                <img src={imageUrl} className="card-img-top" alt="..." height={'161px'}/>
                <div className="card-body" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'column'}}>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl : PropTypes.string,
    newsUrl : PropTypes.string
}

