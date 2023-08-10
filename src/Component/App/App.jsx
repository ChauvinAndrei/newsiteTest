// == COMPONENT
import { Route, Routes } from 'react-router-dom';
import {Menu} from '../Menu/Menu';

import About from '../Menu/SousMenus/About/About';
import Home from '../Menu/SousMenus/Home/Home';
import Account from '../Menu/SousMenus/Account/Account';
import Connexion from '../Menu/SousMenus/Connexion/Connexion';
import Wallet from '../Menu/SousMenus/Wallet/Wallet';

import { useSelector } from 'react-redux';
// == UTILS

// == STYLES
import './App.scss';
import HeaderMain from '../HeaderMain/HeaderMain';

const App = () => {

  const { NavLinks, menuActive } = useSelector((state) => state.page);

  const handlePage = (label) => {

    const filterLinks =  NavLinks.find((link) => {
      return link.label === label;
    })

    const components = {
      About,
      Home,
      Account,
      Connexion,
      Wallet,
    };

    const Component = components[label];
    return Component ? <Component {...filterLinks}/> : null;
  
  }

  return (
    <div className={`App${menuActive ? " off" : ""}`}>

      <HeaderMain />
      
        <div className='app--container'>
          <Menu menuActive={menuActive}/>
          
            <Routes>

              {NavLinks.map((pageLink) => (
                  <Route
                  key={pageLink.label}
                  path={pageLink.to} 
                  element={handlePage(pageLink.label)}
                  />
              ))}

            </Routes>
          </div>
          
    </div>
  );
};

export default App;
