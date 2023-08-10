import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Power, LogOut, Home, User, Info, ShoppingBag, ArrowRightCircle, ArrowLeftCircle} from 'react-feather';

import { updateCurrentPage, displayMenu } from '../../Action/page';

import './Menu.scss';


const NavLinks = [
    { to: '/connexion', icon: <Power />, label: 'Connexion' },
    { to: '/', icon: <Home />, label: 'Home' },
    { to: '/account', icon: <User />, label: 'Account' },
    { to: '/wallet', icon: <ShoppingBag />, label: 'Wallet' },
    { to: '/about', icon: <Info />, label: 'About' },
];

const Menu = ( {menuActive} ) => {

    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(-1);
    const menuItems = useSelector((state) => state.page.NavLinks);
    
    const activeRefs = useRef([]);


    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
    };
    

    useEffect(() => {

       const setMenuItem = () => {
        return NavLinks.map((link, index) => ({
            ...link,
            isActive: activeIndex === index,
            position: activeRefs.current[index]?.offsetTop,
        }))
       }

       dispatch(updateCurrentPage(setMenuItem()));

    }, [activeIndex]);

    
    useLayoutEffect(() => {
        const initialState = activeRefs.current.findIndex((item) => {
          return item.classList.contains('active');
        });

        setActiveIndex(initialState !== -1 ? initialState : -1);
      }, [menuItems]);

    
     return (
        <>
        <div className="label-spans">
            {menuItems.map((menuItem, index) => (
                <span
                    className={"menu--label" + (menuItem.isActive ? " active" : "")}
                    style={{
                        top: `${menuItem.position}px`,
                    }}
                    key={menuItem.label}
                >
                    {menuItem.label}
                </span>
            ))} 
        </div>

        <nav className="menu">
            <div className='menu--wrapper'>      
                <ul className="menu--list">
                    {menuItems.map((menuItem, index) => (
                        <li
                            className={"menu--list-children" + (menuItem.isActive ? " active" : "")}
                            style={{
                                "--newPosition":
                                    menuItem.isActive
                                        ? `translateY(0)`
                                        : `translateY(${menuItems[activeIndex]?.position - menuItem.position }px)`,
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
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
        </>
    )
};    
export { NavLinks, Menu };
