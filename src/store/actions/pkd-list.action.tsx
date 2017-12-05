export const GET_LIST =  'GET_LIST';
export const CHANGE_LIST = 'CHANGE_LIST';

export const GetList = () => ({ type: GET_LIST });

export const ChangeList = (payload: any) => {
    return {
        type: CHANGE_LIST,
        payload: payload
    }
};