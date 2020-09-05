import { TOGGLE_USER } from "../constants/user-constants";

export const user = (user = {}, action) => {
    switch(action.type) {
        case TOGGLE_USER: 
            return {
                userId: action.userId,
                firstName: action.firstName,
                lastName: action.lastName
            };
        default:
            return user;
    }
}