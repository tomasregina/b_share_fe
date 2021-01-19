<template>
  <div>
    <h3>Sign In</h3>
    <form action="" method="post" @submit.prevent="authenticateUser">
      <label for="email">email</label>
      <input type="text" name="email" id="email" v-model="email">
      <label for="password">Password</label>
      <input type="text" name="password" id="password" v-model="password">

      <input type="submit" value="Submit">
    </form>
    <button @click="test">TEST</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      email: undefined,
      password: undefined
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'auth/getUser'
    })
  },
  methods: {
    async test() {
      await this.$axios.$post('/add-item', null, { withCredentials: true });
    },
    ...mapMutations({
      authUser: 'auth/authUser'
    }),

    async authenticateUser() {
      const loginData = new FormData();
      loginData.append('email', this.email);
      loginData.append('password', this.password);
      const loggedUser = await this.$axios.$post('/login-user', loginData, { withCredentials: true });
      if (loggedUser.user) {
        this.authUser(loggedUser.user);
      }


    }
  }
}
</script>
