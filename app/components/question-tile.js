import Ember from 'ember';

export default Ember.Component.extend({
    userAuth: Ember.inject.service(),
  actions: {
  update(rental, params) {
      this.sendAction('update', rental, params);
    }
  }
});
