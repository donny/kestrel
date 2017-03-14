import Ember from 'ember';

export default Ember.Controller.extend({
  email: null,
  password: null,
  errorDialogShown: false,

  signInDisabled: Ember.computed('email', 'password', function() {
    const email = this.get('email');
    const password = this.get('password');
    return (Ember.isBlank(email) || Ember.isBlank(password));
  }),

  actions: {
    signIn() {
      const email = this.get('email');
      const password = this.get('password');
      const context = this;

      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data) {
        console.log(data.currentUser);
        context.transitionToRoute('board');
      }).catch(function(error) {
        console.log(error);
        context.set('errorDialogShown', true);
      });
    },

    signOut() {
      this.get('session').close();
    },

    closeErrorDialog() {
      this.set('errorDialogShown', false);
    }
  }
});
