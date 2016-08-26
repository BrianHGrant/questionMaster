import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  userAuth: Ember.inject.service(),
  
  actions: {
    saveQuestion() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        note: this.get("note"),
        timestamp: moment(this.get('timestamp')).format()
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
