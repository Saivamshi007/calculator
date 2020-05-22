import { createStore } from 'redux'
import calReducer from './calculate/calReducer'
const store=createStore(calReducer)

export default store
