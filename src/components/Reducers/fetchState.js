const initialState = {
    isFetching: false,  //是否与服务器通信
    error: false    //执行时的错误信息
};

export const fetchState = (state = initialState,action) => {
    switch (action.type) {
        case 'START_FETCH' :
            return Object.assign(
                {},
                state,
                {
                    isFetching : true,
                    error : false
                }
            );
        case 'FINISH_FETCH' :
            return Object.assign(
                {},
                state,
                {
                    isFetching : false,
                    error : false
                }
            );
        case 'SET_ERROR' :
            return Object.assign(
                {},
                state,
                {
                    isFetching : false,
                    error :true
                }
            );
        default : return state;
    };
};