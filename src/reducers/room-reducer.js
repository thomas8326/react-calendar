import { OPEN_ROOM_ID } from './../constants/room-constants';

export const room = (room = {}, action) => {
    switch(action.type) {
        case OPEN_ROOM_ID: 
            return {
                roomId: action.roomId,
            };
        default:
            return room;
    }
}