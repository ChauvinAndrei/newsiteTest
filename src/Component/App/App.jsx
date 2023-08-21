// == COMPONENT
import { Route, Routes } from 'react-router-dom';
// import { Menu, MenuDesktop } from '../Menu/Menu';
import { MenuDispatch } from '../Menu/MenuDispatch';


import Home from '../Content/Home/Home';
import Profil from '../Content/Profil/Profil';
import Connexion from '../Content/Connexion/Connexion';
import Actualités from '../Content/Actualités/Actualités';
import Forum from '../Content/Forum/Forum';

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
      Actualités,
      Home,
      Profil,
      Connexion,
      Forum,
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
