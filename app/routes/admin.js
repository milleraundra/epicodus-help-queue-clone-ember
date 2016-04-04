import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ticket');
  },
  actions: {

  }
});


// addTeachers() {
//   var leroi = {
//     name: "Leroi",
//   };
//   var saveLeroi = this.store.createRecord('teacher', leroi);
//   saveLeroi.save();
//   this.transitionTo('admin');
// }
