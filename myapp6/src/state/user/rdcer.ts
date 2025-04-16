import { TStatetUser, TUserActions, UserActionTypes } from "./types";

export const initialState:TStatetUser = {
    users: [],
}

export function reducer(state: TStatetUser, action: TUserActions):TStatetUser {

    switch (action.type) {
        case UserActionTypes.ADD_USER:
            if (Array.isArray(action.payload))
                return {...state,users: [...action.payload] };
            else
                return {...state,users: [...state.users,action.payload] };
        case UserActionTypes.DELETE_USER:
            return {...state}
        default:    
            return {...state}
    }
}