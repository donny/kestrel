import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    const context = this;
    return this.get('session').fetch().catch(function() {
      context.transitionTo('index');
    });
  }
});
