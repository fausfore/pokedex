import { ADD_POKEMON, REMOVE_POKEMON, GET_TEAM } from '@Actions/pkd-team.action';
import { loadState, saveState } from '@Store/local-storage/pkd-local-storage';


const TeamReducer = (state: any = loadState([],'PKD_TEAM'), action: any) =>{
    switch(action.type){
        case GET_TEAM : 
            return state;
        case ADD_POKEMON :
            if(state.length <= 6) {
                let AddNewState = [...state, action.payload];
                saveState(AddNewState, 'PKD_TEAM')
                return AddNewState
            }
            return state
            
        case REMOVE_POKEMON :
            let RmNewState = state.filter((item: any) => {
                return item.id !== action.id;
            })
            saveState(RmNewState, 'PKD_TEAM')
            return RmNewState
        default:
            return state
    }
};

export default TeamReducer;