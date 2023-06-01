import { REPLY_TYPE } from "../actions";

const initialState = {
    loading: false,
    chat: [],
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REPLY_TYPE.REPLY_REQUESTED:
            return {
                ...state,
                loading: true,
                chat: [...state.chat, action.payload],
            };
        case REPLY_TYPE.REPLY_SUCCEEDED:
            let newChat = [...state.chat];
            newChat[newChat.length - 1] = action.payload;
            return {
                loading: false,
                chat: newChat,
                error: "",
            };
        case REPLY_TYPE.REPLY_FAILED:
            return {
                loading: false,
                chat: [],
                error: action.payload,
            };
        default: return state
    }
};