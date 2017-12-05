export const GET_NAV =  'GET_NAV';
export const CHANGE_NAV = 'CHANGE_NAV';
export const SET_CURRENT_NAV = 'SET_CURRENT_NAV';
export const GetNavigation = () => ({ type: GET_NAV });

export const ChangeNavigation = (payload: any) => {
    return {
        type: CHANGE_NAV,
        payload: payload
    }
};

export const SetCurrentNav = (payload: any) => {
    return {
        type: SET_CURRENT_NAV,
        payload: payload
    }
};