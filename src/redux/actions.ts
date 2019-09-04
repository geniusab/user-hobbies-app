import User from "../interfaces/User.interface";
import { ADD_USER, DELETE_USER } from "./types";


export function addUser(newUser: User) {
    console.log('newUser', newUser);
    console.log('newUser_end');
    return {
        type: ADD_USER,
        payload: newUser
    };
}

export function deleteUser(id: number | string) {
    return {
        type: DELETE_USER,
        payload: id
    };
}
