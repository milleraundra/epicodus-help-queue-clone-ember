import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.attr(),
  problem: DS.attr(),
  location: DS.attr(),
  language: DS.attr(),
  submitted: DS.attr('date', {defaultValue() { return new Date(); } }),
  closed: DS.attr('date'),
  teacher: DS.belongsTo('teacher', {async: true})
});
