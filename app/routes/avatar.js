import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user')
  },
  userAuth: Ember.inject.service(),

  actions: {
    updateAvatar() {
      var user = this.get('userAuth.authUser');
      user.save();
      this.transitionTo('avatar');
    }
  }
});
