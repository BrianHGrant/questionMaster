import Ember from 'ember';

export default Ember.Component.extend({
  userAuth: Ember.inject.service(),

  actions: {
    updateAvatar(avatar_id) {
      var params = {
        avatar: avatar_id
      };
      this.set('userAuth.authUser.avatar', params.avatar);
      this.sendAction('updateAvatar', params);
    }
  }
});
