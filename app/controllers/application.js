import Ember from 'ember';

export default Ember.Controller.extend({
  email: null,
  password: null,
  showErrorDialog: false,

  signInDisabled: Ember.computed('email', 'password', function() {
    return this.get('email') === null || this.get('password') === null
  }),

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn: function() {
      const email = this.get('email');
      const password = this.get('password');
      const context = this

      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data) {
        console.log(data.currentUser);
      }).catch(function(error) {
        context.set('showErrorDialog', true);
      });
    },

    signOut: function() {
      this.get('session').close();
    },

    closeErrorDialog: function() {
      this.set('showErrorDialog', false);
    }
  }
});
