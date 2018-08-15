const initialState = {
    index : []
}

export const setIndex = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INDEX' :
            return Object.assign(
                {},
                state,
                {
                    index : action.index
                }
            );
        default : return state;
    }
}