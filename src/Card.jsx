import pp from './assets/pp.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={pp} alt="" />
            <h2 className='card-title'>Fatih</h2>
            <p className='card-text'>React Developer</p>
        </div>
    );
}

export default Card;