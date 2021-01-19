export const state = () => ({
  isLoggedIn: false,
  user: undefined
})

export const mutations = {
  logIn(state) {
    state.isLoggedIn = true;
  },
  logOut(state) {
    state.isLoggedIn = false;
  },
  authUser(state, user) {
    state.user = user
  },
}

export const actions = {
  authUser({ commit }, user) {
    commit('authUser', user);
  },

  checkSIDCookie({ commit }) {
    const cookies = document.cookie;
    const splitCookies = cookies.split(';');
    cookies.forEach((cookie) => {
      const cookieName = cookie.split('=')[0];
      if (cookieName === 'connect.sid') {
        commit('updateLoginStatus', true);
      }
    });
  },

}

export const getters = {
  getUser(state) {
    return state.user;
  }
}
