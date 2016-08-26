import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  avatar: DS.attr(),
  questions: DS.hasMany('question', { async: true})
});
