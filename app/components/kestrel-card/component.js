import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    increaseScore: function() {
      const store = this.get('store');
      const cardId = this.get('card.id');

      store.findRecord('card', cardId).then(function(card) {
        card.incrementProperty('score');
        card.save();
      });
    }
  }
});
