import Ember from 'ember';

export default Ember.Controller.extend({
  newListDialogShown: false,

  actions: {
    showNewListDialog() {
      this.set('newListDialogShown', true);
    },

    closeNewListDialog() {
      this.set('newListDialogShown', false);
    },

    saveList(title) {
      var newList = this.store.createRecord('list', {
        title: title
      });
      newList.save();
      this.set('newListDialogShown', false);
    }
  }
});
