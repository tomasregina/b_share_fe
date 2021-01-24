export const state = () => ({
  allItemsCount: undefined
})

export const mutations = {
  setAllItemsCount(state, count) {
    console.log('mutations', count);
    state.allItemsCount = count;
  }
}

export const actions = {
  setAllItemsCount({ commit }, count) {
    console.log('action', count);
    commit('setAllItemsCount', count);
  }
}

export const getters = {
  getAllItemsCount(state) {
    return state.allItemsCount;
  }
}
