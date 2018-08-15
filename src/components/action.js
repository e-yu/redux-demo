

//action type
/** 
 * 请求时的action
 */
const START_FETCH = 'START_FETCH';

const FINISH_FETCH = 'FINISH_FETCH';

const SET_ERROR = 'SET_ERROR';

/**
 * 设置tabs
 */
const SET_TABS = 'SET_TABS';

/**
 * 设置pageCurrent
 */
const SET_PAGECURRENT = 'SET_PAGECURRENT';

/**
 * 设置post
 */
const SET_LIST = 'SET_LIST';

const SET_INDEX = 'SET_INDEX';

const SET_REPLIES = 'SET_REPLIES'


//action creators
const startFetch = () => {
    return { type : START_FETCH };
};

const finishFetch = () => {
    return { type : FINISH_FETCH };
};

const setError = () => {
    return { type : SET_ERROR };
};

const setTabs = function(event) {
    return {
        type : SET_TABS,
        tab : event.target.value
    };
};

const setPageCurrent = (pageCurrent) => {
    return {
        type : SET_PAGECURRENT,
        pageCurrent
    };
};

const setList = (list) => {
    return {
        type : SET_LIST,
        list
    }
};

const setIndex = (index) => {
    return {
        type : SET_INDEX,
        index
    };
};

const setReplies = (replies) => {
    return {
        type : SET_REPLIES,
        replies
    }
};

export const actions = {
    startFetch,
    finishFetch,
    setError,
    setTabs,
    setPageCurrent,
    setIndex,
    setList,
    setReplies
};