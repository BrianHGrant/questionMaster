import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'});
  this.route('answer', {path: '/anser/:answer_id'});
  this.route('login');
  this.route('avatar');
  this.route('user');
});

export default Router;
