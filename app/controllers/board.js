import Ember from 'ember';

export default Ember.Controller.extend({
  newListDialogShown: false,

  actions: {
    showNewListDialog: function() {
      this.set('newListDialogShown', true);
    },

    closeNewListDialog: function() {
      this.set('newListDialogShown', false);
    },

    saveList: function(title) {
      var newList = this.store.createRecord('list', {
        title: title
      });
      newList.save();
      this.set('newListDialogShown', false);
    }
  }
});
