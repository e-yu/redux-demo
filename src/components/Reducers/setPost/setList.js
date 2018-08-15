const initialState = {
    list : []
}

export const setList = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LIST' :
            return Object.assign(
                {},
                state,
                {
                    list : action.list
                }
            );
        default : return state;
    }
}