import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('newAnswer', true);
    },
    saveAnswer() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        note: this.get("note"),
        timestamp: this.get('timestamp'),
        question: this.get('question')
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
