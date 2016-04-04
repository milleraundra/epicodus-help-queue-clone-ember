import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  tickets: DS.hasMany('ticket', {async:true})
});
