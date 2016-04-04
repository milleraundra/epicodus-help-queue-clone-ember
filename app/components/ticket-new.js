import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newTicket() {
      var params = {
        student: this.get('student') ? this.get('student') : "",
        problem: this.get('problem') ? this.get('problem') : "",
        location: this.get('location') ? this.get('location') : ""
      };
      this.sendAction('newTicket', params);
      this.set('student', "");
      this.set('location', "");
      this.set('problem', "");

    }
  }
});
