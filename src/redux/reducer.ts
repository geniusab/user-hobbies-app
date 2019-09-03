import User from "../interfaces/User.interface";
import mock_users from "../service/mock";
import { UersActionTypes, ADD_USER, DELETE_USER } from "./types";

export interface UsersState {
    users: Array<User>;
}

const initialState: UsersState = {
    users: mock_users()
}

const reducer = (state = initialState, action: UersActionTypes): UsersState => {
    console.log(1);
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            }
        case DELETE_USER:
            return {
                users: state.users.filter((user => user.id !== action.payload))
            }
        default:
            return state
    }
}

export default reducer