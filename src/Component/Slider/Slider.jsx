import './Slider.scss'

import imageTest from '../../Assets/20230430_184000.jpg';
import imageTest2 from '../../Assets/matthew-guay-Q7wDdmgCBFg-unsplash.jpg';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { Heart, ArrowUpRight } from 'react-feather';

const Slider = () => {

    const options = {
        type: 'loop',
        autoplay: true,
        pauseOnHover: true,
        interval: 3000,
        arrows: false,
        perPage: 3,
        height: '200px',
        focus  : 'center',
        pagination: false,
        snap   : true,
        clones: true,
        padding: { left: '1rem', right: '1rem' },
        gap: '1rem',
    }

    return (
        <div className="slider--wrapper">
            <Splide 
            aria-label="actualité"
            options={ options }>

                <SplideSlide data-splide-interval="1000">
                    <img src={imageTest2} alt=''/>

                    <a className='anchorTag--absolute' href='#'>
                       <span className='title--slider'>
                          <h3>Miaou Miaou</h3>
                          <span className='slider-content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus iusto, ratione nesciunt beatae perspiciatis similique eos tempore sequi praesentium molestias cupiditate, sed neque ex provident? Eligendi voluptatem est nam?
                          </span>
                          <span className='slider-like'> 15 <Heart className='slider-heart-like-icon'/></span>
                        </span>
                    </a>
                </SplideSlide>
                
                <SplideSlide data-splide-interval="1000"> 
                    <img src={imageTest2} alt=''/>

                    <a className='anchorTag--absolute' href='#'>
                       <span className='title--slider'>
                          <h3>Miaou Miaou</h3>
                          <span className='slider-content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus iusto, ratione nesciunt beatae perspiciatis similique eos tempore sequi praesentium molestias cupiditate, sed neque ex provident? Eligendi voluptatem est nam?
                          </span>
                          <span className='slider-like'> 15 <Heart className='slider-heart-like-icon'/></span>
                        </span>
                    </a>
                </SplideSlide>

                <SplideSlide data-splide-interval="1000"> 
                    <img src={imageTest} alt=''/>

                    <a className='anchorTag--absolute' href='#'>
                       <span className='title--slider'>
                          <h3>Miaou Miaou</h3>
                          <span className='slider-content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus iusto, ratione nesciunt beatae perspiciatis similique eos tempore sequi praesentium molestias cupiditate, sed neque ex provident? Eligendi voluptatem est nam?
                          </span>
                          <span className='slider-like'> 15 <Heart className='slider-heart-like-icon'/></span>
                        </span>
                    </a>
                </SplideSlide>
                
                <SplideSlide data-splide-interval="1000"> 
                    <img src={imageTest2} alt=''/>

                    <a className='anchorTag--absolute' href='#'>
                       <span className='title--slider'>
                          <h3>Miaou Miaou</h3>
                          <span className='slider-content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus iusto, ratione nesciunt beatae perspiciatis similique eos tempore sequi praesentium molestias cupiditate, sed neque ex provident? Eligendi voluptatem est nam?
                          </span>
                          <span className='slider-like'> 15 <Heart className='slider-heart-like-icon'/></span>
                        </span>
                    </a>
                </SplideSlide>
                
                <SplideSlide data-splide-interval="1000"> 
                    <img src={imageTest2} alt=''/>

                    <a className='anchorTag--absolute' href='#'>
                       <span className='title--slider'>
                          <h3>Miaou Miaou</h3>
                          <span className='slider-content'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel delectus iusto, ratione nesciunt beatae perspiciatis similique eos tempore sequi praesentium molestias cupiditate, sed neque ex provident? Eligendi voluptatem est nam?
                          </span>
                          <span className='slider-like'> 15 <Heart className='slider-heart-like-icon'/></span>
                        </span>
                    </a>
                </SplideSlide>

            </Splide>

        </div>
    )
}


export default Slider;