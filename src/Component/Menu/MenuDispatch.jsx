// == COMPONENT
import { MenuDesktop, Menu } from "./Menu";

// == REACT UTILS
import { useEffect, useState, useRef } from 'react';
import { useDispatch , useSelector} from "react-redux";

// == ACTION
import { updateCurrentPage } from '../../Action/page';

// == ICON
import { Power, Home, User, Info, ShoppingBag } from 'react-feather';

//==================================================================


const NavLinks = [                                                         //- == Array Route et association icon et label ( tableau mise a jour apres appel de la fonction setMenuItem )
    { to: '/connexion', icon: <Power />, label: 'Connexion' },
    { to: '/', icon: <Home />, label: 'Home' },
    { to: '/account', icon: <User />, label: 'Account' },
    { to: '/wallet', icon: <ShoppingBag />, label: 'Wallet' },
    { to: '/about', icon: <Info />, label: 'About' },
];

const MenuDispatch = () => {

    const dispatch = useDispatch();

    const menuItems = useSelector((state) => state.page.NavLinks);         //- == recuperation mise a jour du tableau des liens apres premier rendu ou a l'activation d'un index "Link"
    const [activeIndex, setActiveIndex] = useState(-1);                    //- == Retourne l'index "Link"
    const [returnToInactive, setReturnToInactive] = useState(false);       //- == Reset false to true a l'activation du lien
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);    //- == Check si format mobile ou desktop


    const activeRefs = useRef([]);                                         //- == Retourne tout les élements node "Link"

    /**
     * 
     * @param {number} index - retourne le numero d'index actif
     * Appel de la fonction reset "Link actif"
     */
    const handleMenuItemClick = (index) => {
        setActiveIndex(index);
        setReturnToInactive(true); 
    };


    //======                                                               //- == Check du premier rendu pour connaitre le format a afficher

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth < 1080);
        }

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);   //- == Reset de l'écoute d'évenement
        
    }, [])

    //======

    useEffect(() => {

        let timeoutHidden;

        const setMenuItem = () => {                                        //- == Spread into Array => NavLinks ( isActive, position )
            return NavLinks.map((link, index) => ({
                ...link,
                isActive: activeIndex === index,
                position: activeRefs.current[index]?.offsetLeft,
            }))
        }

        if (returnToInactive) {                                            //- == Reset apres activation du lien de la state "returnToInactive"
            timeoutHidden = setTimeout(() => {
                setReturnToInactive(false);
            }, 800); 
        }
        
        dispatch(updateCurrentPage(setMenuItem()));                        //- == Action to update Array => NavLinks => UPDATE_CURRENT_PAGE
        
        return () => clearTimeout(timeoutHidden);                          //- == Reset timeout returnToInactive

     }, [activeIndex, isMobile]);
    

    //======

    useEffect(() => {                                                      //- == Attente du premier rendu pour obtenir les bonnes positions des élements => Links (évite le NaN)

        const initialState = activeRefs.current.findIndex((item) => {
          return item?.classList.contains('active');
        });

        setActiveIndex(initialState !== -1 ? initialState : -1);

    }, []);

    //======
    
    return (
        <>

            {isMobile ? (
                <Menu
                    handleMenuItemClick={handleMenuItemClick}
                    menuItems={menuItems}
                    activeRefs={activeRefs}
                    activeIndex={activeIndex}
                    isMobile={isMobile}
                /> 
            ) : (
                <MenuDesktop
                    handleMenuItemClick={handleMenuItemClick}
                    menuItems={menuItems}
                    activeRefs={activeRefs}
                    activeIndex={activeIndex}
                    isMobile={isMobile}
                /> 
            )}
        </>
    );
}

export { NavLinks, MenuDispatch};