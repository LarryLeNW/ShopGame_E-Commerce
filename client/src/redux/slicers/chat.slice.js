import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatId: null,
    userConnect: null,
};

export const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        changeUserConnect: (state, action) => {
            let { userSelect, userCurrent } = action.payload;
            if (!userSelect || !userCurrent) {
                state.chatId = null;
                state.userConnect = null;
            } else {
                state.userConnect = userSelect;
                state.chatId =
                    userCurrent.roleId === "USER"
                        ? "idadmin" + userCurrent?.id
                        : "idadmin" + userSelect?.id;
            }
        },
    },
});

export const { changeUserConnect } = ChatSlice.actions;

export default ChatSlice.reducer;
