import { CHANGE_LIST, GET_LIST } from '../actions/pkd-list.action';
import { loadState, saveState } from '../local-storage/pkd-local-storage';


const ListReducer = (state: any = [] , action: any) =>{
    switch(action.type){
        case GET_LIST :
            return state
        case CHANGE_LIST :
            return action.payload
        default:
            return state
    }
};

export default ListReducer;