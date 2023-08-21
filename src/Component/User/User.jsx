import { useState } from 'react';
import { LogOut } from 'react-feather';

import './User.scss';

const UserDisconnect = ( { isMobile } ) => {

  const [ openDisconnect, setOpenDisconnect ] = useState(false);

    return (
        <div className={isMobile ? "navDesktop--user-connect mobile-fixed" : 'navDesktop--user-connect'}> 

         <div className={!openDisconnect ? 'box--infoMobile open' : 'box--infoMobile'}>  

            <button type="button" className='user--infoMmobile-btn' onClick={() => 
              setOpenDisconnect(!openDisconnect)
            }>
              <span className='user--infoMmobile-btn-cross'></span>
            </button>
              
              <div className='box--infoMobile-info'>
                <span className='Mobile-user-info'>
                  <span>Hi</span>, 
                  <span> user 1500</span>
                </span>

        
                <button type="button" className="navDesktop--user-connect-button disconnect">
                <LogOut />
                <span className="navDesktop--user-connect-button-label">Déconnexion</span>
                </button>
              </div>

            </div>
        </div>
    )

}

export { UserDisconnect };