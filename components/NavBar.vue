<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/" href="#">BicycleShare</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item to="/items/page/1" :active="tab==='allItems'" @click="tab = 'allItems'">All bicycles</b-nav-item> -->
        <b-nav-item to="/items?page=1" :active="tab==='allItems'" @click="tab = 'allItems'">All bicycles</b-nav-item>
        <b-nav-item v-if="getUser" to="/add-item" :active="tab=== 'addItem'" @click="tab = 'addItem'">Add Bicycle</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!getUser" to="/sign-in" :active="tab==='signin'" @click="tab = 'signin'">Sign In</b-nav-item>
        <b-nav-item v-if="!getUser" to="/register-user" :active="tab==='register'" @click="tab = 'register'">Register</b-nav-item>
        <b-nav-item v-if="getUser" :active="tab==='logout'" @click="logout">Logout</b-nav-item>
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

       <!--  <b-nav-item-dropdown right>
          // Using 'button-content' slot
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      tab: 'allItems'
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'auth/getUser'
    })
  },
  methods: {
    ...mapMutations({
      authUser: 'auth/authUser'
    }),
    async logout() {
      this.tab = 'logout';
      try {
        const logoutUser = await this.$axios.$post('/logout-user', null, { withCredentials: true });
        this.authUser(undefined);
      }
      catch (e) {
        console.log('logout error', e);
      }
    }
  }
}
</script>
