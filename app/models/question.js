import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr();
  author: DS.attr();
  note: DS.attr();
  timestamp: DS.attr();
});