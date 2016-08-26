import Ember from 'ember';

export default Ember.Component.extend({
  signUpUser: false,

  actions: {
    showSignUpForm() {
      this.set('signUpUser', true);
    },
    createUser() {
      var params = {
        name: this.get("newName"),
        email: this.get("newEmail"),
        avatar: Math.round(Math.random() *10)
      }
      this.set('signUpUser', false);
      this.sendAction('createUser', params)
    }
  }
});
