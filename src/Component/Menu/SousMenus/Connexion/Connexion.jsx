import Page from "../../../Page/Page";

const Connexion = ( { isActive } ) => {

    return (
        <Page>
          <h2 className={`menu--title${isActive ? ' active': ''}`}>Connexion</h2>
        </Page>
    )
}

export default Connexion;