import Page from "../../Page/Page";
import FormConnexion from "./form/form";

const Connexion = ( { isActive } ) => {

    return (
        <Page>

            
            <div id="main-content" className="main-content grid-content">

              <h2 className={`menu--title${isActive ? ' active': ''}`}>Connexion</h2>

                <div className="duContenu">
                    <FormConnexion />
                </div>
            </div>
        </Page>
    )
}

export default Connexion;