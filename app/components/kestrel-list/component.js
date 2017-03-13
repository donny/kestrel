import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  title: null,
  createCardDialogShown: false,

  createCardButtonDisabled: Ember.computed('title', function() {
    return Ember.isBlank(this.get('title'));
  }),

  cards: Ember.computed('list', function() {
    const store = this.get('store');
    const listId = this.get('list.id');
    return store.query('card', { orderBy: 'list', equalTo: listId });
  }),

  actions: {
    showCreateCardDialog: function() {
      this.set('createCardDialogShown', true);
    },

    closeCreateCardDialog: function() {
      this.set('title', null);
      this.set('createCardDialogShown', false);
    },

    createCard: function() {
      const store = this.get('store');
      var newCard = store.createRecord('card', {
        title: this.get('title'),
        score: 0,
        list: this.get('list.id')
      });
      newCard.save();
      this.set('title', null);
      this.set('createCardDialogShown', false);
    }
  }
});
