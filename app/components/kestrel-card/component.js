import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  deleteCardDialogShown: false,

  actions: {
    showDeleteCardDialog() {
      this.set('deleteCardDialogShown', true);
    },

    closeDeleteCardDialog() {
      this.set('deleteCardDialogShown', false);
    },

    increaseScore() {
      const store = this.get('store');
      store.findRecord('card', this.get('card.id')).then(function(card) {
        card.incrementProperty('score');
        card.save();
      });
    },

    deleteCard() {
      const store = this.get('store');
      store.findRecord('card', this.get('card.id'), {
        backgroundReload: false
      }).then(function(card) {
        card.destroyRecord();
      });
      this.set('deleteCardDialogShown', false);
    }
  }
});
