import Ember from 'ember';

export default Ember.Component.extend({
  userAuth: Ember.inject.service(),
  sortBy: ['timestamp:desc'],
  sortedQuestions: Ember.computed.sort('userAuth.authUser.questions', 'sortBy'),
});
