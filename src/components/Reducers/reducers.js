import { combineReducers } from 'redux';
import { fetchState } from './fetchState';
import { setPageCurrent } from './setPageCurrent';
import { post } from './setPost/post';
import { setTabs } from './setTabs';

export const reducers = combineReducers({
    fetchState,
    setPageCurrent,
    post,
    setTabs
});