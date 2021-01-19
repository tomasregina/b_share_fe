
export default function (context) {
  console.log(context.store.getters['auth/getUser'])
  if (!context.store.getters['auth/getUser']) {
    context.redirect('/sign-in');
  }
}
