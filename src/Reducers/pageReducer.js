import { NavLinks } from "../Component/Menu/Menu";

// == ACTION 
import { UPDATE_CURRENT_PAGE, DISPLAY_MENU } from "../Action/page";

const InitialState = {
    
    NavLinks,
    menuActive: true,
};

const pageReducer = ( state = InitialState, action = {} ) => {
console.log(state.menuActive)
    switch (action.type) {

        case UPDATE_CURRENT_PAGE: 
            const arrayLinks = action.arrayLinks;
            return {
                ...state,
                NavLinks: arrayLinks,
            }
        case DISPLAY_MENU:

            return{
                ...state,
                menuActive: !state.menuActive,
            }

        default: 
          return state;
    }
};


export default pageReducer;