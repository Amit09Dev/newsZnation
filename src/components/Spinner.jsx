import { Component } from 'react'
import loading from '../assets/loading.gif'

export default class Spinner extends Component {
    render(){
        return (
            <div className="text-center">
                <img className='mb-3' src={loading} alt="loading" />
            </div>
        )
    }
}