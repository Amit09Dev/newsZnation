import loading from '../assets/loading.gif'

const Spinner = () => {
        return (
            <div className="text-center">
                <img className='mb-3' src={loading} alt="loading" />
            </div>
        )
}

export default Spinner