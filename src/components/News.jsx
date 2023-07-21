import {Component} from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article = [
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "India vs Pakistan Live Score, Emerging Asia Cup 2023: Sai Sudharsan brings up his fifty, IND A 131/1 - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/india-vs-pakistan-live-score-acc-mens-emerging-asia-cup-2023-ind-a-vs-pak-a-scorecard-updates-8847857/",
            "urlToImage": null,
            "publishedAt": "2023-07-19T14:09:36Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Asia Cup 2023 schedule announced - ICC Cricket",
            "description": "The schedule for the 2023 Asia Cup, co-hosted by Pakistan and Sri Lanka, is out with the tournament running from August 30 to September 17.",
            "url": "https://www.icc-cricket.com/news/3597048",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/07/19/3aa7454f-4769-41e8-bc6b-3959375560a7/GettyImages-1244170369.jpg",
            "publishedAt": "2023-07-19T14:00:44Z",
            "content": "The schedule for the 2023 Asia Cup, co-hosted by Pakistan and Sri Lanka, is out with the tournament running from August 30 to September 17.Pakistan will take on Nepal in the opening match of the 2023… [+2015 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Science Desk",
            "title": "International Moon Day 2023: Celebrating the 54th anniversary of Apollo 11 landing - The Indian Express",
            "description": "Each year, July 20 is celebrated as the International Moon Day to mark the anniversary of the Apollo 11 mission's landing on Luna.",
            "url": "https://indianexpress.com/article/technology/science/international-moon-day-2023-apollo-11-8848680/",
            "urlToImage": "https://images.indianexpress.com/2023/07/Astronaut-neilarmstrong-moon-20230719.jpg",
            "publishedAt": "2023-07-19T13:58:46Z",
            "content": "The United Nations General Assembly declared July 20 every year to be celebrated as International Moon Day. Here is everything you need to know about the day and why it is observed.International Moon… [+1865 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Moneycontrol News",
            "title": "India ranks 80th in Henley Passport index with 57 visa-free countries - Moneycontrol",
            "description": "The Indian passport has gained strength compared to last year, when the country was ranked 87th in the Henley Passport Index.",
            "url": "https://www.moneycontrol.com/news/trends/travel/india-ranks-80th-in-henley-passport-index-with-57-visa-free-countries-10988431.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/02/Passport-India-770x433.png",
            "publishedAt": "2023-07-19T12:24:09Z",
            "content": "India has occupied the 80th spot in the Henley Passport Index 2023, which ranks nations based on the visa-free access available for travel on their respective passports. At present, Indian passport h… [+3581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "GT Correspondent",
            "title": "Moon-bound Pioneers: NASA Revives Astronaut Training for Lunar Journey After Half a Century - Times Now",
            "description": "The Artemis program, named after the Greek goddess of the moon, aims to land the first woman and the first person of colour on the lunar surface by 2024.",
            "url": "https://www.timesnownews.com/technology-science/moon-bound-pioneers-nasa-revives-astronaut-training-for-lunar-journey-after-half-a-century-article-101950747",
            "urlToImage": "https://static.tnn.in/thumb/msid-101950747,updatedat-1689769297056,width-1280,height-720,resizemode-75/101950747.jpg",
            "publishedAt": "2023-07-19T12:21:37Z",
            "content": "Crisil Q2 2023 Results OUT: Dividend Announced In Quarterly Earnings Check Dividend Credit Date, PAT, Revenue, Other Details"
        },
    ]

    constructor(){
        super()
        this.state = {
            articles: this.article,
            loading: false
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
                    <NewsItem title={element.title.slice(0, 40,)} description={element.description} NewsUrl={element.url} imageUrl={element.urlToImage}/>
                    </div>
                    )
                })}
                    
                </div>
            </div>
        )
    }
}