import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  newCardDialogShown: false,

  cards: Ember.computed('list', function() {
    const store = this.get('store');
    const listId = this.get('list.id');
    return store.query('card', { orderBy: 'list', equalTo: listId });
  }),

  actions: {
    showNewCardDialog: function() {
      this.set('newCardDialogShown', true);
    },

    closeNewCardDialog: function() {
      this.set('newCardDialogShown', false);
    },

    saveCard: function(title) {
      const store = this.get('store');
      var newCard = store.createRecord('card', {
        title: title,
        score: 0,
        list: this.get('list.id')
      });
      newCard.save();
      this.set('newCardDialogShown', false);
    }
  }
});
