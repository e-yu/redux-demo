const initialState = {
    pageCurrent : 1
}

export const setPageCurrent = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGECURRENT' :
            return Object.assign(
                {},
                state,
                {
                    pageCurrent : action.pageCurrent
                }
            );
        default : return state;
    }
}