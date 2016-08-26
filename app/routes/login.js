import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.findAll('user')
  },
  userAuth: Ember.inject.service(),

  actions: {
    createUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    },

    loginUser(params) {
      var currentUser;
      var users = this.get("currentModel");
      users.forEach(function(user) {
        if(user.get('email') === params.email) {
          currentUser = user;
        }
      });
      if(currentUser){
        this.get('userAuth').login(currentUser);
        this.transitionTo('index');
      } else {
        alert("User Not Found");
      }
    }
  }
});
