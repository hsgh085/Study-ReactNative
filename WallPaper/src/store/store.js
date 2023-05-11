import { applyMiddleware, combineReducers, createStore } from 'redux';
import { countReducer } from '../reducers/count';
import logger from 'redux-logger';

//최상위 Reducer
const rootReducer=combineReducers({ //Reducer합치기
    count:countReducer,
    // ex) dateCount: XX : 최상위 Reducer에 하나씩 추가
})

const store=createStore(rootReducer, applyMiddleware(logger));

export default store;