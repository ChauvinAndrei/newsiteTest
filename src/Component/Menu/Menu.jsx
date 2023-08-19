// == ROUTER UTILS
import { NavLink } from 'react-router-dom';

// == ICON
import { LogOut, User } from 'react-feather';

import './Menu.scss';


const Menu = ({ handleMenuItemClick, menuItems, activeRefs, activeIndex } ) => {

     return (
            <div className='wrapper--menu'>
                    <nav className="menu">
                        
                            <ul className="menu--list">
                                {menuItems.map((menuItem, index) => (
                                    <li
                                        className={"menu--list-children" + (menuItem.isActive ? " active" : "")}
                                        style={{
                                            "--newPosition":
                                                menuItem.isActive
                                                    ? `translateX(0)`
                                                    : `translateX(${menuItems[activeIndex]?.position - menuItem.position }px)`,
                                        }}
                                        key={menuItem.label}
                                    >
                                        <NavLink
                                            to={menuItem.to}
                                            className={({isActive}) => "menu--link" + (isActive ? " active" : "")} 
                                            onClick={() => handleMenuItemClick(index)}
                                            ref={(el) => (activeRefs.current[index] = el)}
                                            
                                        >
                                            {menuItem.icon}
                                            <span key={menuItem.label} > {menuItem.label} </span>
                                        </NavLink>

                                    </li>
                                ))}
                            </ul>
                    
                    </nav>
            </div>
    )
}; 


const MenuDesktop = ( { handleMenuItemClick, menuItems, activeRefs, activeIndex } ) => {

    return (
        <div className="navDesktop--wrapper">
        <div>
            <div className='navDesktop--user'>

                    <div className='navDesktop--user-icon'>
                        <User />

                        <a className="anchorTag--absolute" href=""></a>
                        <span>Profil</span>
                    </div>

                    <div className='navDesktop--user-connect'>
                        <button type="button" className="navDesktop--user-connect-button disconnect">
                        <LogOut />
                        <span className="navDesktop--user-connect-button-label">Déconnexion</span>
                        </button>

                        {/* <button type="button" className="navDesktop--user-connect-button connect">
                        <Power />
                        <span className='navDesktop--user-connect-button-label'>Connexion</span>
                        </button> */}
                    </div>
            </div>

            <nav className="navDesktop--nav">
                <ul className="navDesktop--nav--list">

                    <li className='navDesktop--nav--list-title'><h2>Pages</h2>
                        <ul className='navDesktop--nav--list-menu'>
                            {menuItems.map((menuItem, index) => (
                                <li className={'navDesktop--nav--list-menu-item' + (menuItem.isActive ? " active" : "")} 
                                style={{
                                    "--newPosition":
                                        menuItem.isActive
                                            ? `translateY(0)`
                                            : `translateY(${menuItems[activeIndex]?.position - menuItem.position }px)`,
                                }}
                                key={menuItem.label}>

                                    <NavLink
                                        to={menuItem.to}
                                        className={({ isActive }) => `menu--link${isActive ? " active" : ""}`}
                                        onClick={() => handleMenuItemClick(index)}
                                        ref={(el) => (activeRefs.current[index] = el)}
                                    >
                                        <span key={menuItem.label} > {menuItem.label} </span>
                                    </NavLink>

                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className='navDesktop--nav--list-title'><h2>Thèmes</h2>
                        <ul className='navDesktop--nav--list-menu'>
                            <li className='navDesktop--nav--list-menu-item'><a href="#">Front</a></li>
                            <li className='navDesktop--nav--list-menu-item'><a href="#">Back-end</a></li>
                            <li className='navDesktop--nav--list-menu-item'><a href="#">Laravel</a></li>
                            <li className='navDesktop--nav--list-menu-item'><a href="#">React</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>
            </div>
        </div>
    )
}


export { Menu , MenuDesktop};
