// Describing the user of the user's slice of state
// todo interface or types
import User from "../interfaces/User.interface";

// Describing the different ACTION NAMES available

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

interface AddAction {
    type: typeof ADD_USER;
    payload: User
}

interface DeleteAction {
    type: typeof DELETE_USER;
    payload: Number | String;
}

export type UersActionTypes = AddAction | DeleteAction;