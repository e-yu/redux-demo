const initialState = {
    replies: []
}

export const setReplies = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REPLIES' :
            return Object.assign(
                {},
                state,
                {
                    replies : action.replies
                }
            );
        default : return state;
    }
}