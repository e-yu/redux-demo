import { combineReducers } from 'redux';
import { setList } from './setList';
import { setIndex } from './setIndex';
import { setReplies } from './setReplies';

export const post = combineReducers({
    setList,
    setIndex,
    setReplies
});