export const state = () => ({
  allItemsCount: undefined
})

export const mutations = {
  setAllItemsCount(state, count) {

    state.allItemsCount = count;
  }
}

export const actions = {
  setAllItemsCount({ commit }, count) {

    commit('setAllItemsCount', count);
  }
}

export const getters = {
  getAllItemsCount(state) {
    return state.allItemsCount;
  }
}
