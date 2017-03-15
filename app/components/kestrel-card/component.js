import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  deleteCardDialogShown: false,
  editCardDialogShown: false,

  actions: {
    mergeCard(obj) {
      const context = this;
      const store = this.get('store');
      const cardId = this.get('card.id');
      const newTitle = this.get('card.title') + ' ' + obj.get('card.title');
      // Delete the dragged card.
      store.findRecord('card', obj.get('card.id'), {
        backgroundReload: false
      }).then(function(card) {
        card.destroyRecord();

        // Update the drop-target card.
        store.findRecord('card', cardId).then(function(card) {
          card.set('title', newTitle);
          card.save();
        });
        context.set('editCardDialogShown', true);
      });
    },

    showEditCardDialog() {
      this.set('editCardDialogShown', true);
    },

    closeEditCardDialog() {
      this.set('editCardDialogShown', false);
    },

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
    },

    editCard(title) {
      const store = this.get('store');
      store.findRecord('card', this.get('card.id')).then(function(card) {
        card.set('title', title);
        card.save();
      });
      this.set('editCardDialogShown', false);
    }
  }
});
