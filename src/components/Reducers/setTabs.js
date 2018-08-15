
const initialState = {
    tabs: [
        {
            name: 'all',
            isCheck: true
        },
        {
            name: 'ask',
            isCheck: false
        },
        {
            name: 'share',
            isCheck: false
        },
        {
            name: 'job',
            isCheck: false
        }
    ]
};

export const setTabs = (state = initialState,action) => {
    switch (action.type) {
        case 'SET_TABS' :
            return Object.assign(
                {},
                state,
                {
                    tabs:state.tabs.map(function(item, index) {
                        if (item.name == action.tab) {
                            item.isCheck = true;
                        }else {
                            item.isCheck = false;
                        }

                        return item;
                    })
                }
            );
        default : return state;
    };
};