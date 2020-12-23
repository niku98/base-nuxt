import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { Staff } from '~/models/Staff'
import { store } from '~/constants'

export interface StaffStates {
  list: Staff[]
  error?: any
}

export const state = (): StaffStates => ({
  list: [],
})

export const getters: GetterTree<StaffStates, any> = {}

export const mutations: MutationTree<StaffStates> = {
  [store.staff.mutations.change]: (state, list: Staff[]) => {
    state.list = list
    state.error = undefined
  },
  [store.staff.mutations.error]: (state, error: any) => {
    state.list = []
    state.error = error
  },
}

export const actions: ActionTree<StaffStates, any> = {
  [store.staff.actions.fetch]({ commit }) {
    return this.$axios
      .get('user')
      .then((response) => {
        commit(store.staff.mutations.change, response.data.data)
        return response
      })
      .catch((error) => {
        commit(store.staff.mutations.error, error)
      })
  },
}
