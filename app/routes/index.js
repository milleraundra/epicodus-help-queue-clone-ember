import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },
  actions: {
    newTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      console.log(newTicket.id);
      newTicket.save();
      this.transitionTo('request', newTicket.id);
    }
  }
});
