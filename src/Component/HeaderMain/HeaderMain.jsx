import Logo from '../../Assets/logo.svg';

import './HeaderMain.scss';

const HeaderMain = () => {
    
    return (
        <header className="header--wrapper">

            <div className="header--logo-wrapper">
                <img src={Logo} alt="" />
                <h1>Nom du Logo</h1>
            </div>
            
        </header>
    )
}

export default HeaderMain;