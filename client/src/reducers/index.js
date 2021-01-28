import { combineReducers } from 'redux'
import users from './users'
import datas from './datas'
import dataDates from './dataDates'
import maps from './maps'

export default combineReducers({
  users,
  datas,
  dataDates,
  maps,
})