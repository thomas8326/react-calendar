import { SEND_MESSAGE, SEND_FILE, SEND_IMAGE, RECEIVED_MESSAGE } from "../constants/action-constants";

const textMessage = (action) => {
    return {
        userId: action.userId,
        messageId: action.messageId,
        message: action.message
    }
}

const fileMessage = (action) => {
    return {
        userId: action.userId,
        messageId: action.messageId,
        message: action.file
    }
}

export const messages = (lastMessageState = [], action) => {
    switch (action.type) {
        case RECEIVED_MESSAGE:
            console.log('In');
            return [
                ...lastMessageState,
                textMessage(action)
            ];        
        case SEND_MESSAGE:
            return [
                ...lastMessageState,
                textMessage(action)
            ];
        case SEND_FILE:
        case SEND_IMAGE:
            return [
                ...lastMessageState,
                fileMessage(action)
            ]
        default:
            return lastMessageState;
    }
}
