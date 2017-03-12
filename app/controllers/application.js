import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn: function() {
      this.transitionToRoute('signin');
    },
    signOut: function() {
      this.get('session').close();
      this.transitionToRoute('index');
    }
  }
});
