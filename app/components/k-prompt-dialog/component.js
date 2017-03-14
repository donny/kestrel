import Ember from 'ember';

export default Ember.Component.extend({
  text: null,

  okButtonDisabled: Ember.computed('text', function() {
    return Ember.isBlank(this.get('text'));
  }),

  actions: {
  }
});
