export default {
  data() {

  },
  computed: {

  },
  methods: {
    comparePasswords(pwd,rePwd) {
      if (pwd !== rePwd) {
        return false;
      }
      return true;
    },
    anyEmptyField(userData) {
      if (Object.values(userData).some(field => field === '')) {
        return true;
      }
      return false;
    },
    validateEmail(email) {
      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
        return false;
      }
      return true;
    },

    validatePassword(password) {
      if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(this.userData.password))) {
        return false;
      }
      return true;
    }

  }
}
