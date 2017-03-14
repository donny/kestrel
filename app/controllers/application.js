import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn() {
      this.transitionToRoute('signin');
    },
    signOut() {
      this.get('session').close();
      this.transitionToRoute('index');
    }
  }
});
