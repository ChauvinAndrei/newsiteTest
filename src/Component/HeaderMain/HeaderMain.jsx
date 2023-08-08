import Logo from '../../Assets/logo.svg';

import './HeaderMain.scss';

const HeaderMain = () => {
    
    return (
        <header className="header--wrapper">

            <div className="header--wrapper-div">

                <div className='header--logo'>
                <img src={Logo} alt="" />
                <h1>Mon site (Boostrap caca)</h1>
                </div>

                <div className='header--links'>
                  {/* <span>link 1</span> */}
                  <span>More</span>
                </div>

            </div>
            
        </header>
    )
}

export default HeaderMain;