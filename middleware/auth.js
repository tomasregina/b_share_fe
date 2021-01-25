
export default function (context) {

  if (!context.store.getters['auth/getUser']) {
    context.redirect('/sign-in');
  }
}
