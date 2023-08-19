// == COMPONENT
import { NavLinks } from "../Component/Menu/MenuDispatch";

// == ACTION 
import { UPDATE_CURRENT_PAGE } from "../Action/page";

const InitialState = {
    
    NavLinks,
    menuActive: true,
};

const pageReducer = ( state = InitialState, action = {} ) => {

    switch (action.type) {

        case UPDATE_CURRENT_PAGE: 
            const arrayLinks = action.arrayLinks;
            return {
                ...state,
                NavLinks: arrayLinks,
            }

        default: 
          return state;
    }
};


export default pageReducer;