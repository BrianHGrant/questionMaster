import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    loginUser() {
      var params = {
        name: this.get("name"),
        email: this.get("email"),
        avatar: Math.round(Math.random() *10)
      }
      console.log(params.avatar)
      this.sendAction('loginUser', params)
    }
  }
});
