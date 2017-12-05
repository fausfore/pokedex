import { combineReducers, createStore, applyMiddleware } from 'redux';
import selected from '@Reducers/pkd-selected.reducer';
import list from '@Reducers/pkd-list.reducer';
import team from '@Reducers/pkd-team.reducer';
import navigation from '@Reducers/pkd-navigation.reducer';
import { IPokemonListItem, IPokemonDetail, INavigation } from '@Models/reducers.models'


interface StoreEnhancerState {};


export interface RootState extends StoreEnhancerState {
    selected: IPokemonDetail
    list: IPokemonListItem[]
    team: IPokemonDetail[]
    navigation: INavigation
};

const reducers = combineReducers<RootState>({
    selected,
    list,
    team,
    navigation
});


const rootStore = createStore(
    reducers
);


export default rootStore

