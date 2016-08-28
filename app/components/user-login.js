import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    loginUser() {
      var params = {
        name: this.get("name"),
        email: this.get("email"),
      };
      this.sendAction('loginUser', params);
    }
  }
});
