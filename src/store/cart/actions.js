import * as types from './mutation_types'
export default  {
  delete_cart: ({commit}) => {
    commit(types.DELETE_CART)
  },
  check_cart: ({commit}, obj) => {
    commit(types.CHECK_CART, obj)
  },
  create_cart: ({commit}, {shop}) => {
    commit(types.CREATE_CART, shop)
  },
  add_cart: ({commit}) => {
    commit(types.ADD_CART)
  },
  reduce_cart: ({commit}) =>{
    commit(types.REDUCE_CART)
  },
  login: ({commit}) =>{
    commit(types.Login)
  },
  logout: ({commit}) =>{
    commit(types.Logout)
  },
  totalprice: ({commit}) =>{
    commit(types.TotalPrice)
  },
  update_cart: ({commit}) => {
    commit(types.UPDATE_CART)
  },
  create_order: ({commit}) => {
    commit(types.CREATE_ORDER)
  },
  change_state: ({commit}) => {
    commit(types.CHANGE_STATE)
  },
  change_all_state: ({commit}) => {
    commit(types.CHANGE_ALL_STATE)
  }
}
