import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
  createListDialogShown: false,

  createListButtonDisabled: Ember.computed('title', function() {
    return Ember.isBlank(this.get('title'));
  }),

  actions: {
    showCreateListDialog: function() {
      this.set('createListDialogShown', true);
    },

    closeCreateListDialog: function() {
      this.set('title', null);
      this.set('createListDialogShown', false);
    },

    createList: function() {
      var newList = this.store.createRecord('list', {
        title: this.get('title')
      });
      newList.save();
      this.set('title', null);
      this.set('createListDialogShown', false);
    }
  }
});
