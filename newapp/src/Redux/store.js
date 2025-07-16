import { applyMiddleware, combineReducers, configureStore, legacy_createStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { userReducers } from './loginreducer'


export const usereducer1=combineReducers({
    auth:userReducers
})

export const store=legacy_createStore(usereducer1,applyMiddleware(thunk))