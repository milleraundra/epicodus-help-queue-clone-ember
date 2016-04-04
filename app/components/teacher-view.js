import Ember from 'ember';

export default Ember.Component.extend({
  isTeacher: false,
  teacherSelected: "None",
  actions: {
    isTeacher(){
      this.set('isTeacher', true);
    },
    selectTeacher() {
      this.set('teacherSelected', event.target.value);
    },
    teacherCloseTicket(ticket) {
      var params = {
        teacher: this.get('teacherSelected'),
      };
      this.sendAction('teacherCloseTicket', ticket, params);
    }


  }
});
