import FormConnexion from "./form/form";

import withPageWrapper from "../PageWrapper";

const Connexion = ( { isActive } ) => {

    return (
            <div id="main-content" className="main-content grid-content">

              <h2 className={`menu--title${isActive ? ' active': ''}`}>Connexion</h2>

                <div className="duContenu">
                    <FormConnexion />
                </div>
            </div>
    )
}

const WrapperConnexion = withPageWrapper(Connexion);

export default WrapperConnexion;