export const GET_TEAM =  'GET_TEAM';
export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';

export const GetTeam = () => ({ type: GET_TEAM });

export const AddPokemon = (pokemon: any) => {
    return {
        type: ADD_POKEMON,
        payload: pokemon
    }
};

export const RemovePokemon = (id: number) => {
    return {
        type: REMOVE_POKEMON,
        id: id
    }
};