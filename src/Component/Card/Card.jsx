
import imageTest2 from '../../Assets/matthew-guay-Q7wDdmgCBFg-unsplash.jpg';

import './Card.scss'

const Card = () => {

    return (
        <div className='Card--Actualités-wrapper'>

            <div className='Card--Actualités-image'>
                <div className='Card--Actualités-image-likeComment'>
                    <img src={imageTest2} alt="" />
                </div>
            </div>

            <div className='Card--Actualités-info'>
                <h3 className='Card--Actualités-info-titre'> Titre </h3>
                <p className='Card--Actualités-info-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat eaque optio, veritatis molestiae fugit itaque ipsam illum libero at dolorem voluptatibus eveniet ex cum tenetur nam, exercitationem inventore iste.</p>
            </div>
        </div>
    )
}

export default Card;