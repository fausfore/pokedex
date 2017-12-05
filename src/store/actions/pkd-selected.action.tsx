import { ResponsePokeApi } from '@Models/api-response.model';

export const GET_POKEMON: string =  'GET_POKEMON';
export const SET_POKEMON: string = 'SET_POKEMON';

export const GetPokemon = () => ({ type: GET_POKEMON });

export const SetPokemon = (payload: ResponsePokeApi) => {
    return {
        type: SET_POKEMON,
        payload: payload
    }
};