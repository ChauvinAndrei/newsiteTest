// == COMPONENT
import { Route, Routes } from 'react-router-dom';
// import { Menu, MenuDesktop } from '../Menu/Menu';
import { MenuDispatch } from '../Menu/MenuDispatch';

import About from '../Content/About/About';
import Home from '../Content/Home/Home';
import Account from '../Content/Account/Account';
import Connexion from '../Content/Connexion/Connexion';
import Wallet from '../Content/Wallet/Wallet';
import WrapperWallet from '../Content/Wallet/Wallet';

import { useSelector } from 'react-redux';
// == UTILS

// == STYLES
import './App.scss';
import HeaderMain from '../HeaderMain/HeaderMain';

const App = () => {

  const { NavLinks } = useSelector((state) => state.page);

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
    return Component ? <Component {...filterLinks} /> : null;
  
  }

  return (
    <div className='App'>

      <HeaderMain />
      
        <div className='app--container'>
          
          <MenuDispatch />

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
