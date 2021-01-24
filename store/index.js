export const actions = {
 async nuxtServerInit({ commit, app }, { req }) {
   try {
     const allItemsCount = await this.$axios.$get('/all-items');
     commit('items/setAllItemsCount', allItemsCount.allItemsCount);

   }
   catch (e) {
     console.log('e', e);
   }



    const cookies = req.headers.cookie;
    let SID;
    if (cookies) {
      const splittedCookies = cookies.split(';');
      splittedCookies.forEach((cookie) => {
        if (cookie.split('=')[0] === 'connect.sid') {
          SID = cookie.split('=')[1]
        }
      })
    }
    if (SID) {
      const loggedUser = await this.$axios.$get('/', { headers: {
        withCredentials:true,

       } });
      if (Object.keys(loggedUser).length) {
        commit('auth/authUser', loggedUser.user);
      }
    }
  },
}
