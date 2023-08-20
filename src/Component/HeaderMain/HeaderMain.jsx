import Logo from '../../Assets/logo.svg';
import SearchHeader from './Search/SearchHeader';

import './HeaderMain.scss';

const HeaderMain = () => {
    
    return (
        <header className="header--wrapper">

            <div className="header--wrapper-div">

                <div className='header--logo'>
                    <img src={Logo} alt="DevWeaver sync logo" />
                </div>

                <SearchHeader />
                
            </div>
            
        </header>
    )
}

export default HeaderMain;