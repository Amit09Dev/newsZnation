import PropTypes from 'prop-types'
import Error404 from '../assets/404error.gif'
import './NewsItemStyle.css'

const NewsItem = (props) =>{

  let {title, description, imageUrl, newsUrl, author, date} = props
        return(
            <div className='position-relative'>
               <span className="badge text-bg-primary">{author ? author : 'Unknown'}</span>
               <div className="card mt-3" style={{ height: '410px'}}>
                <img src={imageUrl ? imageUrl : Error404} className="card-img-top" alt="..." height={'161px'}/>
                <div className="card-body" >
                    <h5 className="card-title">{title ? title.slice(0, 60).concat('...') : '' }</h5>
                    <p className="card-text">{description ? description.slice(0, 70).concat('...') : ''}</p>
                    <p className="card-text text-start"><small className="text-body-dark">Updated on: {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                </div>
                </div>
            </div>
        )
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl : PropTypes.string,
    newsUrl : PropTypes.string,
    date: PropTypes.string, 
    author:PropTypes.string,
}


export default NewsItem
