import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Power, LogOut, Home, User, Info, ShoppingBag, ArrowRightCircle, ArrowLeftCircle} from 'react-feather';

import { updateCurrentPage, displayMenu } from '../../Action/page';
// import { useActiveMenu } from '../../utils';

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
    const [returnToInactive, setReturnToInactive] = useState(false);
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    const activeRefs = useRef([]);


    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setReturnToInactive(true);
    };
    
// ======

    // useEffect(() => {

    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth < 700);
    //     }

    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);
        
    // }, [])

// ======

    useEffect(() => {

        let timeoutHidden;

       const setMenuItem = () => {
        return NavLinks.map((link, index) => ({
            ...link,
            isActive: activeIndex === index,
            // position: isMobile
            // ? activeRefs.current[index]?.offsetLeft
            // : activeRefs.current[index]?.offsetTop,
            position: activeRefs.current[index]?.offsetLeft,
        }))
       }

       if (returnToInactive) {
        timeoutHidden = setTimeout(() => {
            setReturnToInactive(false);
        }, 800); 
    }
       dispatch(updateCurrentPage(setMenuItem()));
    
       return () => clearTimeout(timeoutHidden);
    }, [activeIndex]);

// ======

    useLayoutEffect(() => {
        const initialState = activeRefs.current.findIndex((item) => {
          return item.classList.contains('active');
        });

        setActiveIndex(initialState !== -1 ? initialState : -1);
      }, [menuItems]);

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
                                                    ? `translateY(0)`
                                                    : `translateX(${menuItems[activeIndex]?.position - menuItem.position }px)`,
                                                    // (!isMobile ? `translateY(${menuItems[activeIndex]?.position - menuItem.position }px)` : `translateX(${menuItems[activeIndex]?.position - menuItem.position }px)`),
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
                                            {/* style={{maxWidth: menuItem.isActive ? "none" : '24px'}}  */}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                    
                    </nav>
            </div>
    )
}; 


const MenuDesktop = () => {

    const dispatch = useDispatch();

    const [activeIndex, setActiveIndex] = useState(-1);
    const menuItems = useSelector((state) => state.page.NavLinks);
    const [returnToInactive, setReturnToInactive] = useState(false);
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    const activeRefs = useRef([]);


    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setReturnToInactive(true);
    };
    
    // ======

        useEffect(() => {

            let timeoutHidden;

        const setMenuItem = () => {
            return NavLinks.map((link, index) => ({
                ...link,
                isActive: activeIndex === index,
                // position: isMobile
                // ? activeRefs.current[index]?.offsetLeft
                // : activeRefs.current[index]?.offsetTop,
                position: activeRefs.current[index]?.offsetLeft,
            }))
        }

        if (returnToInactive) {
            timeoutHidden = setTimeout(() => {
                setReturnToInactive(false);
            }, 800); 
        }
        dispatch(updateCurrentPage(setMenuItem()));
        
        return () => clearTimeout(timeoutHidden);
        }, [activeIndex]);

    // ======

        useLayoutEffect(() => {
            const initialState = activeRefs.current.findIndex((item) => {
            return item.classList.contains('active');
            });

            setActiveIndex(initialState !== -1 ? initialState : -1);
        }, [menuItems]);

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
                                key={menuItem.label}>

                                    <NavLink
                                        to={menuItem.to}
                                        className={({isActive}) => "menu--link" + (isActive ? " active" : "")} 
                                        onClick={() => handleMenuItemClick(index)}
                                        ref={(el) => (activeRefs.current[index] = el)}
                                    >
                                        {/* {menuItem.icon} */}
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


export { NavLinks, Menu , MenuDesktop};
