import Page from "../Page/Page";

/**
 * 
 * @param {React.ComponentType} ContentComponent - Retourne le composant ciblé depuis la route
 * @returns - retourne le composant avec son wrapper Page
 */
const withPageWrapper = (ContentComponent) => {

    return ({ isActive }) => (
      <Page isActive={isActive}>
        <ContentComponent isActive={isActive}/>
      </Page>
    );
};

export default withPageWrapper;