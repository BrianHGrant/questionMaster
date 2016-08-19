import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        note: this.get("note"),
        timestamp: this.get('timestamp')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
