import { GET_POKEMON, SET_POKEMON } from '../actions/pkd-selected.action';
import { loadState, saveState } from '@Store/local-storage/pkd-local-storage';

const SelectedReducer = (state: any = loadState({},'PKD_PROFIL'), action: any) =>{
    switch(action.type){
        case GET_POKEMON :
            return state
        case SET_POKEMON :
            saveState(action.payload, 'PKD_PROFIL')
            return action.payload
        default:
            return state
    }
};

export default SelectedReducer;