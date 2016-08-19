import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    showUpdateForm() {
      this.set('updateQuestion', true);
    },
    update(question){
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        note: this.get("note"),
        timestamp: this.get('timestamp')
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
