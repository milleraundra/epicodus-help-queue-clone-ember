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
      var helper = params.teacher;
      console.log(helper);
      debugger;
      helper.get('tickets').addObject(ticket);
      ticket.set('closed', new Date());
      ticket.save().then(function(){
        helper.save();
      });
      this.transitionTo('request');
    }
  }

});
