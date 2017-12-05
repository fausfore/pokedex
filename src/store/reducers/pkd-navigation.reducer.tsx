import { GET_NAV, CHANGE_NAV, SET_CURRENT_NAV } from '@Actions/pkd-navigation.action';
import { loadState, saveState } from '@Store/local-storage/pkd-local-storage';
import { INavigation } from '@Models/reducers.models';

const defaultState: INavigation = {
    current_navigation: 0,
    offset: 0,
    list: []
}

const SelectedReducer = (state: INavigation = defaultState, action: any) =>{
    switch(action.type){
        case GET_NAV :
            return state
        case CHANGE_NAV :
            return action.payload
        case SET_CURRENT_NAV :
            return Object.assign(state, action.payload)
        default:
            return state
    }
};

export default SelectedReducer;