import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      ticket: this.store.findRecord('ticket', params.ticket_id),
      teachers: this.store.findAll('teacher')
    });
  },

  actions: {
    closeTicket(ticket, params){
      ticket.set('teacher', params[0]);
      ticket.set('closed', new Date());
      ticket.save();
      this.transitionTo('request');
    }
  }

});
