<template>
  <div>
    <h3>Register user</h3>
    <form action="" method="post" @submit.prevent="registerUser">
      <label for="username">Username</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !userData.username && emptyField}" name="username" id="username" v-model="userData.username">
      <label for="email">Email</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !userData.email && emptyField}" name="email" id="email" v-model="userData.email">
      <label for="address">Address</label>
      <select name="address" id="address" v-model="userData.address">
        <option value="BA">Bratislava</option>
        <option value="PK">Pezinok</option>
        <option value="SC">Senec</option>
      </select>
      <label for="password">Password</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !userData.password && emptyField}" name="password" id="password" v-model="userData.password">
       <label for="repassword">Reenter password</label>
      <input type="text" @change="emptyField=false" :class="{emptyFieldAlert: !userData.repassword && emptyField}" name="repassword" id="repassword" v-model="userData.repassword">

      <input type="submit" value="Register">
    </form>

    <b-alert v-if="alertTextDanger" show variant="danger">{{ alertTextDanger }}</b-alert>
    <b-alert v-if="alertTextSuccess" show variant="success">{{ alertTextSuccess }}</b-alert>
  </div>
</template>
<script>
import validations from '../mixins/validations'
export default {
  mixins: [validations],
  data() {
    return {
      userData: {
        username: undefined,
        email: undefined,
        password: undefined,
        repassword: undefined,
        address: 'BA',
      },
      alertTextDanger: undefined,
      alertTextSuccess: undefined,
      emptyField: false
    }
  },
  methods: {
    async registerUser() {
      this.alertTextDanger = undefined;
      if (this.userData.password !== this.userData.repassword) {
        this.alertTextDanger = 'Passwords are not matching!'
        return
      }
      if (Object.values(this.userData).some(field => field === '')) {
        this.emptyField = true;
        return;
      }
      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.userData.email))) {
        this.alertTextDanger = 'Incorrect email address'
        return;
      }
      if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.userData.password))) {
        this.alertTextDanger = 'Password must include at least 8 charactes, 1 uppercase and 1 lowercase char';
        return;
      }
      const newUserFormData = new FormData();
      newUserFormData.append('username', this.userData.username);
      newUserFormData.append('email', this.userData.email);
      newUserFormData.append('password', this.userData.password);
      newUserFormData.append('address', this.userData.address);
      try {
        const newUserRes = await this.$axios.$post('/register-user', newUserFormData);
        this.alertTextSuccess = 'Registration successful, you can now sign in'
      }
      catch(e) {
        console.log('e');
      }


    }
  }
}
</script>
<style lang="scss" scoped>
.emptyFieldAlert {
  border-color: red;
}
</style>
