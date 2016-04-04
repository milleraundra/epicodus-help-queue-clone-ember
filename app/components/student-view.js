import Ember from 'ember';

export default Ember.Component.extend({
  isStudent: false,
  //noTeacher: Ember.computed.filterBy('teacher', 'name', 'None'),
  actions: {
    isStudent(){
      this.set('isStudent', true);
    },
    studentCloseTicket(ticket) {
      var params = [];
      this.teachers.forEach(function(singleTeacher){
        if(singleTeacher.get('name') === 'None'){
          params = {
            teacher: singleTeacher
          };
        }
      });
      console.log(params);
      this.sendAction('studentCloseTicket', ticket, params);
    }
  }
});
