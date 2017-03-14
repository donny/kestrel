import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  deleteCardDialogShown: false,

  actions: {
    showDeleteCardDialog: function() {
      this.set('deleteCardDialogShown', true);
    },

    closeDeleteCardDialog: function() {
      this.set('deleteCardDialogShown', false);
    },

    increaseScore: function() {
      const store = this.get('store');
      store.findRecord('card', this.get('card.id')).then(function(card) {
        card.incrementProperty('score');
        card.save();
      });
    },

    deleteCard: function() {
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
