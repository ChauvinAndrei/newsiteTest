import { useRef, useEffect, useState } from 'react';
import Page from "../Page/Page";

/**
 * 
 * @param {React.ComponentType} ContentComponent - Retourne le composant ciblé depuis la route
 * @returns - retourne le composant avec son wrapper Page
 */
const withPageWrapper = (ContentComponent) => {

  return ({isActive, label}) => {

    const mainContentRef = useRef(null);                   // - recuperation de l'élement inner wrapper
    const [positionTitle, setPositionTitle] = useState({}); // - update de la position du titre de la page actuel
   
    // =======

      useEffect(() => {                                    // - check du nombre d'élement présent
        const currentMain = mainContentRef.current;
        const childCount = currentMain.children.length
        
          childCount <= 1 && setPositionTitle({
            top: currentMain.offsetTop,                    // - update de la state si le nombre d'enfant du composant excède 1 (renvoie la nouvelle valeur)
          });

        return () => {
          setPositionTitle(0);                             // - reset du nombre d'enfant au nouveau render du nouveau composant créer
        }

    }, []);

    // ========

      return (
        <Page isActive={isActive} >                        {/* - passage de l'information de la page active au click du lien */}

          <div className="main--wrapper--div-inner" ref={ mainContentRef }>
            
            <ContentComponent 
            isActive={ isActive } 
            label={ label }
            positionTitle={ positionTitle }/>              {/* - Composant trouver en retour du params ContentComponent et affichage au changement de la route */}

          </div>
          
        </Page>
      );
  };

};

export default withPageWrapper;