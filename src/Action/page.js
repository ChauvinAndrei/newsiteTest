export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
export const DISPLAY_MENU = 'DISPLAY_MENU';


export const updateCurrentPage = ( arrayLinks ) => ({
    type: UPDATE_CURRENT_PAGE,
    arrayLinks,
});

export const displayMenu = () => ({
    type: DISPLAY_MENU,
});