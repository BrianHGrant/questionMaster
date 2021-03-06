import Ember from 'ember';

export default Ember.Component.extend({
  userAuth: Ember.inject.service(),

  actions: {
  update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
